import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// External Libs
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Component
import { StartPageComponent } from './start-page.component';

const routes = [{
  path: '',
  component: StartPageComponent
}];

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild( routes ),
    MatFormFieldModule,
    MatInputModule
  ]
})
export class StartPageModule { }
