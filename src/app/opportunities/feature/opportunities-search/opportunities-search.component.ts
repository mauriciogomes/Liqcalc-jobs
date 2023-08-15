import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OpportunityContract } from 'src/app/shared/opportunity-contract.enum';
import { OpportunityLevel } from 'src/app/shared/opportunity-level.enum';
import { OpportunityRegime } from 'src/app/shared/opportunity-regime.enum';

// Model
import { Opportunity } from 'src/app/shared/opportunity.model';

@Component({
  selector: 'app-opportunities-search',
  templateUrl: './opportunities-search.component.html',
  styleUrls: ['./opportunities-search.component.css', './custom-material.scss']
})
export class OpportunitiesSearchComponent implements OnInit {

  isLoading: boolean = false;
  isFilterExpanded: boolean = false;
  
  searchFields = {
    "keyword": {
      label: "Título da vaga",
      value: null
    },
    "level": {
      label: "Nível",
      options: [
        {value: "junior", description: "Júnior"},
        {value: "mid", description: "Pleno"},
        {value: "senior", description: "Sênior"},
        {value: "spec", description: "Especialista"}
      ],
      value: []
    },
    "contract": {
      label: "Contrato",
      options: [
        {value: "intern", description: "Estágio"},
        {value: "clt", description: "CLT"},
        {value: "trainee", description: "Trainee"},
        {value: "legal", description: "PJ"}
      ],
      value: []
    },
    "regime": {
      label: "Regime",
      options: [
        {value: "in_person", description: "Presencial"},
        {value: "hybrid", description: "Híbrido"},
        {value: "remote", description: "Remoto"}
      ],
      value: []
    },
    "salaryRange": {
      label: "Faixa Salarial",
      options: [
        {value: "a", description: "Até R$1.320,00"},
        {value: "b", description: "R$1.320,00 à R$2.500,00"},
        {value: "c", description: "R$2.500,00 à R$4.000,00"},
        {value: "d", description: "R$4.000,00 à R$6.000,00"},
        {value: "e", description: "R$6.000,00 à R$8.000,00"},
        {value: "f", description: "À partir de R$8.000,00"}
      ],
      value: []
    }
  }

  opportunities: Opportunity[] = [
    {
      _id: '32423',
      index: 0,
      title: 'Desenvolvedor Front End',
      level: OpportunityLevel.Junior,
      description: 'Desenvolver e testar soluções em front end, visando a qualidade e boa manutenção. Deverá manter uma boa comunicação com a equipe de backend e designer para realizar entregar assertivas.',
      salary: 3000.00,
      benefits: 'VT + VA',
      regime: OpportunityRegime.Remote,
      contract: OpportunityContract.CLT,
      company: { name: 'Softxpto', location: 'Floripa'},
      registered: new Date('2021-08-20T11:34:37 +03:00')
    },
    {
      _id: '32423',
      index: 0,
      title: 'Desenvolvedor',
      level: OpportunityLevel.Junior,
      description: 'Desenvovler e testar (Mock)',
      salary: 2500.00,
      benefits: 'VA/VR + Gym Pass',
      regime: OpportunityRegime.Remote,
      contract: OpportunityContract.CLT,
      company: { name: 'LOTVS', location: 'Blumenau'},
      registered: new Date('2021-08-20T11:34:37 +03:00')
    },
    {
      _id: '32423',
      index: 0,
      title: 'Desenvolvedor',
      level: OpportunityLevel.Mid,
      description: 'Desenvovler e testar (Mock)',
      salary: 7000.00,
      benefits: 'VR',
      regime: OpportunityRegime.Remote,
      contract: OpportunityContract.LegalPerson,
      company: { name: 'XPTO', location: 'Floripa'},
      registered: new Date('2021-08-20T11:34:37 +03:00')
    }
  ];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  clearKeywordField() {
    this.searchFields.keyword.value = null;
  }

  expandFilters() {
    this.isFilterExpanded = true;
  }

  collapseFilters() {
    this.isFilterExpanded = false;
  }

  handleClickCard(opportunity: Opportunity) {
    const id = opportunity._id;
    // this.router.navigate(['opportunities', 'detail', id]);
    this.router.navigate(['opportunities', 'detail']);
  }
}
