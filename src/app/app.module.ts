import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { MoedaBrPipe } from './shared/pipes/moeda-br.pipe';
import { DecimalBrPipe } from './shared/pipes/decimal-br.pipe';

// External Libs
import { DigitOnlyModule } from '@uiowa/digit-only';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

registerLocaleData(localePt);

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
  providers: [
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
