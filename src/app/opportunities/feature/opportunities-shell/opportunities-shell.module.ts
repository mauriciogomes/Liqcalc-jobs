import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { OpportunitiesSearchComponent } from '../opportunities-search/opportunities-search.component';
import { OpportunityDetailComponent } from '../opportunity-detail/opportunity-detail.component';

@NgModule({
  declarations: [
    OpportunitiesSearchComponent,
    OpportunityDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OpportunitiesShellModule { }
