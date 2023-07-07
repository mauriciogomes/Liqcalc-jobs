import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunity-detail',
  templateUrl: './opportunity-detail.component.html',
  styleUrls: ['./opportunity-detail.component.css']
})
export class OpportunityDetailComponent implements OnInit {

  description = "Prévia: esta página exibirá o detalhamento da vaga e a opção de cadidatar-se."

  constructor() { }

  ngOnInit(): void {
  }

}
