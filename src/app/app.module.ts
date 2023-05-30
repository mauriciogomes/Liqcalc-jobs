import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';

import { AppComponent } from './app.component';
import { MoedaBrPipe } from './shared/pipes/moeda-br.pipe';
import { DecimalBrPipe } from './shared/pipes/decimal-br.pipe';

// External Libs
import { DigitOnlyModule } from '@uiowa/digit-only';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { OpportunitiesSearchComponent } from './opportunities/feature/opportunities-search/opportunities-search.component';
import { OpportunityDetailComponent } from './opportunities/feature/opportunity-detail/opportunity-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    
    // MoedaBrPipe,
    // DecimalBrPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DigitOnlyModule,
    HeaderModule,
    FooterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
