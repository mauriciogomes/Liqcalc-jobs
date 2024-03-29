import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { CalculoComponent } from '../calculo/calculo.component';
import { TabelasAliquotasComponent } from '../tabelas-aliquotas/tabelas-aliquotas.component';

// Modules
import { CalculatorShellRoutingModule } from './calculator-shell-routing.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { ComingSoonModule } from 'src/app/shared/ui/coming-soon/coming-soon.module';


@NgModule({
  declarations: [
    CalculoComponent,
    TabelasAliquotasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalculatorShellRoutingModule,
    PipesModule,
    ComingSoonModule
  ]
})
export class CalculatorShellModule { }
