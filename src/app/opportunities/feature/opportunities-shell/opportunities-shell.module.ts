import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { OpportunitiesShellRoutingModule } from './opportunities-shell-routing.module';

// Components
import { OpportunitiesSearchComponent } from '../opportunities-search/opportunities-search.component';
import { OpportunityDetailComponent } from '../opportunity-detail/opportunity-detail.component';
import { ComingSoonModule } from 'src/app/shared/ui/coming-soon/coming-soon.module';
import { OpportunityCreationComponent } from '../opportunity-creation/opportunity-creation.component';


@NgModule({
  declarations: [
    OpportunitiesSearchComponent,
    OpportunityDetailComponent,
    OpportunityCreationComponent
  ],
  imports: [
    CommonModule,
    OpportunitiesShellRoutingModule,
    ComingSoonModule
  ]
})
export class OpportunitiesShellModule { }
