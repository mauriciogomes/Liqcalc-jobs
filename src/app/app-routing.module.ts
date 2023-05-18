import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const rotas: Routes = [
  {
    path: 'start',
    loadChildren: () =>
      import('./start-page/start-page.module').then(
        (m) => m.StartPageModule
      )
  },
  {
    path: 'opportunities',
    loadChildren: () =>
      import('./opportunities/feature/opportunities-shell/opportunities-shell.module').then(
        (m) => m.OpportunitiesShellModule
      )
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./calculator/feature/calculator-shell/calculator-shell.module').then(
        (m) => m.CalculatorShellModule
      )
  },
  
  {path: '', redirectTo: '/calculator', pathMatch: 'full'},
  {path: '**', redirectTo: '/calculator', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      rotas,
      {enableTracing: false}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }