import { Component, Input, OnInit } from '@angular/core';
import { Opportunity } from 'src/app/shared/opportunity.model';

@Component({
  selector: 'app-opportunity-card',
  templateUrl: './opportunity-card.component.html',
  styleUrls: ['./opportunity-card.component.css']
})
export class OpportunityCardComponent implements OnInit {

  @Input() value: Opportunity;
  @Input() isResponsive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
