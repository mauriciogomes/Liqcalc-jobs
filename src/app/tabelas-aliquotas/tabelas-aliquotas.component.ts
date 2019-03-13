import { Component, OnInit } from '@angular/core';

import { TabelaAliquotaService }  from '../tabela-aliquota.service';

@Component({
  selector: 'app-tabelas-aliquotas',
  templateUrl: './tabelas-aliquotas.component.html',
  styleUrls: ['./tabelas-aliquotas.component.css']
})
export class TabelasAliquotasComponent implements OnInit {

  constructor(public aliquotaService: TabelaAliquotaService) { }

  ngOnInit() {
  }

  getAliquotasINSS(){
    console.log(">> getAliquotasINSS()");
    const aliquotas = this.aliquotaService.aliquotasINSS;
    console.log(aliquotas);
    return aliquotas;
  }

  getAliquotasIR(){
    return this.aliquotaService.aliquotasIR;
  }

}
