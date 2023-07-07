import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunities-search',
  templateUrl: './opportunities-search.component.html',
  styleUrls: ['./opportunities-search.component.css']
})
export class OpportunitiesSearchComponent implements OnInit {

  description = "Prévia: esta página exibirá os filtros de busca e a listagem das oportunidades."
  constructor() { }

  ngOnInit(): void {
  }

}
