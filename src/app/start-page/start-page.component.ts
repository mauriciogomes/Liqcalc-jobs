import { Component, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { OpportunitiesService } from '../opportunities/data-access/opportunities.service';
import { Opportunity } from '../shared/opportunity.model';
import { OpportunityLevel } from '../shared/opportunity-level.enum';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css', './custom-material.scss']
})
export class StartPageComponent implements OnInit {

  @ViewChild('imageHexagon') hexagon;
  initialHexagonTop: number;

  searchTerm: string;

  newOpportunities: Opportunity[] = [];

  constructor(
    public renderer: Renderer2,
    public opportunitiesService: OpportunitiesService
  ) { }

  ngOnInit(): void {
    this.opportunitiesService.getLastOpportunities()
      .subscribe((opportunities) => {
        this.newOpportunities = opportunities;
      });
  }

  @HostListener('window:scroll', []) onScroll() {
    this.rotatePolygon();
  }

  rotatePolygon() {
    const elementTop = this.hexagon.nativeElement.getBoundingClientRect().top;

    if( !this.initialHexagonTop ) {
      this.initialHexagonTop = elementTop;
    }

    let delta = this.initialHexagonTop - elementTop;
    let degrees = delta * (0.5);
    this.renderer.setStyle(this.hexagon.nativeElement, 'transform', `rotate(${degrees}deg)`);
  }

  handleTypeSearch(event: KeyboardEvent) {
    if(event.code == 'Enter') {
      //console.log(`enter: ${this.searchTerm}`);

      // todo aqui joga pra tela de busca, já usando o termo digitado
    }
  }

  getLevelValue(value) {
    return OpportunityLevel[value];
  }
}
