import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { OpportunitiesSearchComponent } from '../opportunities-search/opportunities-search.component';
import { OpportunityDetailComponent } from '../opportunity-detail/opportunity-detail.component';
import { OpportunityCreationComponent } from '../opportunity-creation/opportunity-creation.component';


const routes: Routes = [
  {
    path: 'search',
    component: OpportunitiesSearchComponent
  },
  {
    path: 'detail',
    component: OpportunityDetailComponent
  },
  {
    path: 'creation',
    component: OpportunityCreationComponent
  },
  {
    path: '',
    redirectTo: 'search'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunitiesShellRoutingModule { }
