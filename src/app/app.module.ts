import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TabelasAliquotasComponent } from './tabelas-aliquotas/tabelas-aliquotas.component';
import { CalculoComponent } from './calculo/calculo.component';
import { MoedaBrPipe } from './pipes/moeda-br.pipe';
import { DecimalBrPipe } from './pipes/decimal-br.pipe';

// External Libs
import { DigitOnlyModule } from '@uiowa/digit-only';

const rotas: Routes = [
  {path: 'calculo', component: CalculoComponent},
  {path: 'tabela-aliquotas', component: TabelasAliquotasComponent },
  {path: '', redirectTo: '/calculo', pathMatch: 'full'},
  {path: '**', component: CalculoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TabelasAliquotasComponent,
    CalculoComponent,
    MoedaBrPipe,
    DecimalBrPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      rotas,
      {enableTracing: false}
    ),
    DigitOnlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
