import { Component, OnInit } from '@angular/core';

import { TabelaAliquotaService }  from '../../../tabela-aliquota.service';

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
    const aliquotas = this.aliquotaService.aliquotasINSS;
    return aliquotas;
  }

  getAliquotasIR(){
    const aliquotas = this.aliquotaService.aliquotasIR;
    return aliquotas;
  }

}
