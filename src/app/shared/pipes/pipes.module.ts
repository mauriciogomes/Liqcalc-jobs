import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Pipes
import { DecimalBrPipe } from './decimal-br.pipe';
import { MoedaBrPipe } from './moeda-br.pipe';

@NgModule({
  declarations: [
    DecimalBrPipe,
    MoedaBrPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DecimalBrPipe,
    MoedaBrPipe
  ]
})
export class PipesModule { }
