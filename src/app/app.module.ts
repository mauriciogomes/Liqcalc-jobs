import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TabelasAliquotasComponent } from './tabelas-aliquotas/tabelas-aliquotas.component';

const rotas: Routes = [
  {path: 'tabela-aliquotas', component: TabelasAliquotasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TabelasAliquotasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      rotas,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
