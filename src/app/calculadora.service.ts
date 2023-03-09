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
	public efetuarCalculo(salarioBruto: number): any {
		
		let faixasAliquotas;

		try{
			// objAliquota = this.tabelaAliquota.selecionarAliquotaINSS(salarioBruto);
			faixasAliquotas = this.tabelaAliquota.selecionarAliquotasINSS(salarioBruto);
		}catch(erro){
			const msgErro = `Falha ao efetuar cálculo: ${erro.message}`;
			console.error(msgErro);
			throw new Error(msgErro);
		}

		//let valorINSS = this.calcularValorINSSAntigo(salarioBruto, objAliquota);
		let valorINSS = this.calcularValorINSS(salarioBruto, faixasAliquotas);

		//todo calcularAliquotaEfetiva
		let aliquotaINSSEfetiva = 0;
		

		const salarioBaseParaIR = salarioBruto - valorINSS;
		
		let objAliquota;
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

		//return {salarioLiquido, valorINSS, valorIR, aliquotaINSS, aliquotaIR};
		return {salarioLiquido, valorINSS, valorIR, aliquotaINSSEfetiva, aliquotaIR};
		
	}

	calcularValorINSSAntigo(salarioBruto: number, objAliquota: any): number {
		let valorINSS;

		if(objAliquota.tetoINSS && salarioBruto > objAliquota.tetoINSS){
			valorINSS = objAliquota.tetoINSS * objAliquota.INSS / 100;
		} else {
			valorINSS = salarioBruto * objAliquota.INSS / 100;
		}

		return valorINSS;
	}

	calcularValorINSS(salarioBruto: number, faixasAliquotas: any[]): number {
		const ultimaFaixa = faixasAliquotas[faixasAliquotas.length - 1];
		let montante = 0;
		let denominador: number;

		for(let i = 0; i <= faixasAliquotas.length - 2; i++) {
			denominador = this.subtrairDecimal(faixasAliquotas[i].valorFinal, faixasAliquotas[i].valorInicial);
			montante += (faixasAliquotas[i].aliquotaAplicada / 100 * denominador);
		}

		denominador = (salarioBruto - ultimaFaixa.valorInicial);
		montante += (ultimaFaixa.aliquotaAplicada / 100 * denominador);

		return montante;
	}


	/**
	 * Ajuste para melhorar precisao da subtracao
	 */
	subtrairDecimal(valorA: number, valorB: number): number {
		return Number.parseFloat((valorA - valorB).toFixed(2));
	}

	/**
	 * Ajuste para melhorar precisao da subtracao
	 */
	dividirDecimal(denominador: number, divisor: number): number {
		return Number.parseFloat((denominador / divisor).toFixed(2));
	}

	/**
	 * Ajuste para melhorar precisao da subtracao
	 */
	multiplicarDecimal(fatorA: number, fatorB: number): number {
		return Number.parseFloat((fatorA * fatorB).toFixed(2));
	}

}
