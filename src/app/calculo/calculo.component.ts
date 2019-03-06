import { Component, OnInit } from '@angular/core';

import { TabelaAliquotaService } from '../tabela-aliquota.service';
import { CalculadoraService }	 from '../calculadora.service';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

	entrada = {salarioBruto: 0};

	saida = { salarioLiquido: 0,
						salarioBruto: 0,
						aliquotaINSS: 0,
						aliquotaIR: 0,
						valorINSS: 0,
						valorIR: 0
					};

	isDetalhesAtivo = false;

	constructor(public aliquotasService: TabelaAliquotaService, public calculadora: CalculadoraService){

	}

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
		if(this.entrada.salarioBruto > 0){
			let resultado = this.calculadora.efetuarCalculo(this.entrada.salarioBruto);

			this.saida.salarioBruto = this.entrada.salarioBruto;
			this.saida.salarioLiquido = resultado.salarioLiquido;
			this.saida.valorINSS = resultado.valorINSS;
			this.saida.aliquotaINSS = resultado.aliquotaINSS;
			this.saida.valorIR = resultado.valorIR;
			this.saida.aliquotaIR = resultado.aliquotaIR;
		}
	}

	trataAcaoDetalhes(){
		this.isDetalhesAtivo = !this.isDetalhesAtivo;
	}
}
