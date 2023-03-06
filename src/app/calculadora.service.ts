import { Injectable } from '@angular/core';

import { TabelaAliquotaService } from './tabela-aliquota.service';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(public tabelaAliquota: TabelaAliquotaService) { }

	//todo aplicar regras novas
	// https://ingracio.adv.br/contribuicoes-inss/
	
  /**
	 * Retorna um objeto com cinco atributos: salarioLiquido, valorINSS, valorIR,
	 * aliquotaINSS e aliquotaIR
	 * @param salarioBruto 
	 */
	public efetuarCalculo(salarioBruto: number): any{
		
		let objAliquota;
		try{
			objAliquota = this.tabelaAliquota.selecionarAliquotaINSS(salarioBruto);	
		}catch(erro){
			const msgErro = `Falha ao efetuar cálculo: ${erro.message}`;
			console.error(msgErro);
			throw new Error(msgErro);
		}		
		const aliquotaINSS = objAliquota.INSS;
		console.log("Aliquota INSS: " + aliquotaINSS);
		let valorINSS;
		if(objAliquota.tetoINSS && salarioBruto > objAliquota.tetoINSS){
			valorINSS = objAliquota.tetoINSS * aliquotaINSS / 100;			
		}else{
			valorINSS = salarioBruto * aliquotaINSS / 100;
		}

		const salarioBaseParaIR = salarioBruto - valorINSS;
		
		try{
			objAliquota = this.tabelaAliquota.selecionarAliquotaIR(salarioBaseParaIR);
		}catch(erro){
			const msgErro = `Falha ao efetuar cálculo: ${erro.message}`;
			console.error(msgErro);
			throw new Error(msgErro);
		}
		const aliquotaIR = objAliquota.IR;
		const deducaoIR = objAliquota.deducaoIR;
		const valorIR = (salarioBaseParaIR * aliquotaIR / 100) - deducaoIR;

		const salarioLiquido = salarioBaseParaIR - valorIR;

		return {salarioLiquido, valorINSS, valorIR, aliquotaINSS, aliquotaIR};
		
	}
}
