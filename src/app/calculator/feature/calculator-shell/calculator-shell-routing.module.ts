import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { CalculoComponent } from '../calculo/calculo.component';
import { TabelasAliquotasComponent } from '../tabelas-aliquotas/tabelas-aliquotas.component';

const routes = [
  {path: '', component: CalculoComponent},
  {path: 'tabela-aliquotas', component: TabelasAliquotasComponent },
  {path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalculatorShellRoutingModule { }
