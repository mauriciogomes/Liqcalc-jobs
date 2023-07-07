import { Component, OnInit, ViewChild } from '@angular/core';

import { TabelaAliquotaService } from '../../../tabela-aliquota.service';
import { CalculadoraService }	 from '../../../calculadora.service';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

	description = "Prévia: uma calculadora de salário líquido baseada nas alíquotas atuais da previdência e IR. Deverá exibir os valores deduzidos e também um gráfico informativo."

	entrada = {salarioBruto: '0', isServidorFederal: false};

	saida = {
		salarioLiquido: 0,
		salarioBruto: 0,
		aliquotaINSS: 0,
		aliquotaIR: 0,
		valorINSS: 0,
		valorIR: 0
	};

	isDetalhesAtivo = false;

	mensagemErro: string = null;

	@ViewChild('msgErro') boxErro;

	constructor(
		public aliquotasService: TabelaAliquotaService,
		public calculadora: CalculadoraService
	){}

	ngOnInit(){
		if (!this.aliquotasService.aliquotasINSS || !this.aliquotasService.aliquotasIR) {
			this.aliquotasService.carregaTabelas().then(
				(hasSucess) => {
				},
				(erro)=>{
					console.error("carregarTabelas() : " + erro);
				}
			);
		}
	}
	
	tratarAcaoCalcular(){
		const salario = Number.parseFloat(this.entrada.salarioBruto);
		const isServidorFederal = this.entrada.isServidorFederal;

		if(Number.isNaN(salario)){
			this.mensagemErro = "O salário deve ser numérico";
			return;
		}

		if(salario > 0){
			let resultado = this.calculadora.efetuarCalculo(salario, isServidorFederal);

			this.saida.salarioBruto = salario;
			this.saida.salarioLiquido = resultado.salarioLiquido;
			this.saida.valorINSS = resultado.valorINSS;
			this.saida.aliquotaINSS = resultado.aliquotaINSSEfetiva;
			this.saida.valorIR = resultado.valorIR;
			this.saida.aliquotaIR = resultado.aliquotaIR;
		}else{
			if(salario <= 0){
				this.mensagemErro = "O salário precisa ser maior que 0 (zero)";
				//this.exibeMensagem();
			}
		}
	}

	trataAcaoDetalhes(){
		this.isDetalhesAtivo = !this.isDetalhesAtivo;
	}

	trataMudancaSalario() {
		this.mensagemErro = null;
	}

	/* exibeMensagem(){
		this.boxErro.class = "visivel";
	} */
}
