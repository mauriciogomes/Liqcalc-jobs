import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
