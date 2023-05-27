import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    RouterModule.forChild( routes )
  ]
})
export class StartPageModule { }
