import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opportunity-creation',
  templateUrl: './opportunity-creation.component.html',
  styleUrls: ['./opportunity-creation.component.css']
})
export class OpportunityCreationComponent implements OnInit {

  description = "Prévia: conterá um formulário para a criação de uma nova oportunidade."

  constructor() { }

  ngOnInit(): void {
  }

}
