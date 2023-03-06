import { Component, OnInit, ViewChild } from '@angular/core';

import { TabelaAliquotaService } from '../tabela-aliquota.service';
import { CalculadoraService }	 from '../calculadora.service';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

	entrada = {salarioBruto: '0'};

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
					if (hasSucess) {
						console.log("Carregou aliquotas: " + hasSucess);
					}
				},
				(erro)=>{
					console.error("carregarTabelas() : " + erro);
				}
			);
		}
	}
	
	tratarAcaoCalcular(){
		const salario = Number.parseInt(this.entrada.salarioBruto)
		if(Number.isNaN(salario)){
			this.mensagemErro = "O salário deve ser numérico";
			return;
		}

		if(salario > 0){
			let resultado = this.calculadora.efetuarCalculo(salario);

			this.saida.salarioBruto = salario;
			this.saida.salarioLiquido = resultado.salarioLiquido;
			this.saida.valorINSS = resultado.valorINSS;
			this.saida.aliquotaINSS = resultado.aliquotaINSS;
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

	/* exibeMensagem(){
		this.boxErro.class = "visivel";
	} */
}
