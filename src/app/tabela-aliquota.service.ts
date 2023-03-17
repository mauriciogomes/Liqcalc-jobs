import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TabelaAliquotaService {

  public aliquotasINSS: Array<any>;
	public aliquotasIR: Array<Object>;

	private _urlTabelaINSS: string = environment.apiUrl + '/inss_table';
  private _urlTabelaIR: string = environment.apiUrl + '/ir_table';

	constructor(public http: HttpClient) {
	}

	/**
	 * Responsável por carregar as tabelas com as aliquotas necessárias para a realização dos cálculos.
	 * Elas ficam disponíveis de forma pública no provider 
	 */
	public carregaTabelas(): Promise<boolean>{
		// Esse método pode ser melhorado utilizando o encadeamento de promise já que o then retorna
		// uma promise também (ex. p.then((valor)=>{...}).then(...) )
		
		const promiseINSS = new Promise<boolean>((resolve, reject)=>{
			this.carregaTabelaINSS().then((hasLoaded)=>{
				if(hasLoaded)
					resolve(true)
				else
					reject(hasLoaded)
      })
      .catch((erro)=>{
        reject(erro)
      });
		});
 
		const promiseIR = new Promise<boolean>((resolve, reject)=>{
			promiseINSS.then(
				(hasLoadedINSS)=>{
					if(!hasLoadedINSS) reject("Não carregou INSS; " + hasLoadedINSS);

					this.carregaTabelaIR().then((hasLoaded)=>{
						if(hasLoaded)
							resolve(true)
						else
							reject("Não carregou IR; " + hasLoaded)
					});
				},
				(erro)=>{
					reject("Erro ao carregar tabelas; " + erro)
				}
			)
		});
			
		return promiseIR;
		
	}

	/**
	 * Requisita a tabela de alíquotas e a torna acessível à aplicação
	 */
	private carregaTabelaINSS(): Promise<boolean> {
		return new Promise((resolve, reject)=>{
			this.http.get(this._urlTabelaINSS)
			.subscribe( (response: Response) => {
					this.aliquotasINSS = this.extraiDadosVigentes(response);
					resolve(true);
				},
				(erro: Error)=>{
          const msgErro = "Carregamento de tabela de aliquota. " + erro.message;
          console.error( msgErro );
		      reject(msgErro);
        })
		});
		
	}

	private carregaTabelaIR(): Promise<boolean>{
		return new Promise((resolve, reject)=>{
			this.http.get(this._urlTabelaIR)
			.subscribe( 
				(response: Response) => {
					this.aliquotasIR = this.extraiDadosVigentes(response);
					resolve(true);
				},
        //this.trataErro
        (erro: Error)=>{
          const msgErro = "Carregamento de tabela de aliquota. " + erro.message;
          console.error( msgErro );
		      reject(msgErro);
        }
			);
		});
	}

	private extraiDadosVigentes(aliquotas){
		// Pega a tabela do ano corrente ou anterior previnindo caso haja tabela
		// previamente definida mas não vigente
		const hoje = new Date();
		let ano = hoje.getFullYear();
		let aliquotasVigentes;
		do{
			aliquotasVigentes = aliquotas[ano];
			ano--;
		}while(!aliquotasVigentes);

		console.log('[tabela-aliquota.service] extrai ', aliquotasVigentes)
		
		return aliquotasVigentes;
	}

	/** @deprecated */
	public selecionarAliquotaINSS(salarioBruto){
		const aliquota = {'INSS': 0};

		// Garantir que as aliquotas já foram carregadas
		if(!Array.isArray(this.aliquotasINSS) || this.aliquotasINSS.length == 0){
			throw new Error("Aliquotas de INSS não foram carregadas.");
		}

		for(let ind=0; ind < this.aliquotasINSS.length; ind++){
			const faixa = this.aliquotasINSS[ind];

			if(salarioBruto >= faixa.valorInicial && salarioBruto <= faixa.valorFinal){
				aliquota['INSS'] = faixa.aliquota;
				break;
			}else if( ind === this.aliquotasINSS.length - 1 ){
				// foi necessário saber se é a ultima faixa de valores já que o valor final (teto)
				// não indica que o salário não cai na regra
				aliquota['INSS'] = faixa.aliquota;
				aliquota['tetoINSS'] = faixa.valorFinal;
			}
		}

		return aliquota;
	}

	public selecionarAliquotasINSS(salarioBruto): any[] {
		const aliquotas = [];

		// Garantir que as aliquotas já foram carregadas
		if(!Array.isArray(this.aliquotasINSS) || this.aliquotasINSS.length == 0){
			throw new Error("Aliquotas de INSS não foram carregadas.");
		}

		this.aliquotasINSS.forEach((faixaAliquota) => {
			if(salarioBruto >= faixaAliquota.valorInicial) {
				aliquotas.push(faixaAliquota);
			} else {
				return;
			}
		})

		// for(let ind=0; ind < this.aliquotasINSS.length; ind++){
		// 	const faixa = this.aliquotasINSS[ind];

		// 	if(salarioBruto >= faixa.valorInicial && salarioBruto <= faixa.valorFinal){
		// 		aliquota['INSS'] = faixa.aliquota;
		// 		break;
		// 	}else if( ind === this.aliquotasINSS.length - 1 ){
		// 		// foi necessário saber se é a ultima faixa de valores já que o valor final (teto)
		// 		// não indica que o salário não cai na regra
		// 		aliquota['INSS'] = faixa.aliquota;
		// 		aliquota['tetoINSS'] = faixa.valorFinal;
		// 	}
		// }

		return aliquotas;
	}

	// As aliquotas precisam ser carregadas separadas porque só há
	// salário base depois do cálculo de INSS 
	public selecionarAliquotaIR(salarioBase){
		const aliquota = {'IR': 0, 'deducaoIR': 0};

		// Garantir que as aliquotas já foram carregadas
		if(!Array.isArray(this.aliquotasIR) || this.aliquotasIR.length == 0){
			throw new Error("Aliquotas de IR não foram carregadas.");
		}

		this.aliquotasIR.forEach((faixa:any)=>{
			if(salarioBase >= faixa.valorInicial 
					&& (salarioBase <= faixa.valorFinal || faixa.valorFinal == -1) ){
				aliquota['IR'] = faixa.aliquota ? faixa.aliquota : 0;
				aliquota['deducaoIR'] = faixa.deduzir ? faixa.deduzir : 0;
			}
		});
		
		return aliquota;
	}
}
