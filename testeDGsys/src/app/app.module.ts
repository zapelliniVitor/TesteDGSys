import { RouterModule } from '@angular/router';
import { PessoaModule } from './pessoa/pessoa.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimeNgAntdModule } from 'src/modulos/prime-ng-antd.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    PessoaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
