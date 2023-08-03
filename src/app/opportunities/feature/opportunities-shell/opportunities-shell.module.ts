import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { OpportunitiesShellRoutingModule } from './opportunities-shell-routing.module';

// Components
import { OpportunitiesSearchComponent } from '../opportunities-search/opportunities-search.component';
import { OpportunityDetailComponent } from '../opportunity-detail/opportunity-detail.component';
import { ComingSoonModule } from 'src/app/shared/ui/coming-soon/coming-soon.module';
import { OpportunityCreationComponent } from '../opportunity-creation/opportunity-creation.component';
import { OpportunityCardComponent } from '../../ui/opportunity-card/opportunity-card.component';

// External Libs
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OpportunitiesSearchComponent,
    OpportunityDetailComponent,
    OpportunityCreationComponent,
    OpportunityCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OpportunitiesShellRoutingModule,
    ComingSoonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class OpportunitiesShellModule { }
