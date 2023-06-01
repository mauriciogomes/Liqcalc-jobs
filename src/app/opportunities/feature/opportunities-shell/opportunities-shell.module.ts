import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { OpportunitiesShellRoutingModule } from './opportunities-shell-routing.module';

// Components
import { OpportunitiesSearchComponent } from '../opportunities-search/opportunities-search.component';
import { OpportunityDetailComponent } from '../opportunity-detail/opportunity-detail.component';


@NgModule({
  declarations: [
    OpportunitiesSearchComponent,
    OpportunityDetailComponent
  ],
  imports: [
    CommonModule,
    OpportunitiesShellRoutingModule
  ]
})
export class OpportunitiesShellModule { }
