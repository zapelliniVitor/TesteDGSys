import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudModule } from './../../modulos/crud.module';

import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaService } from './pessoa.service';
import { PrimeNgAntdModule } from 'src/modulos/prime-ng-antd.module';


@NgModule({
  declarations: [PessoaListagemComponent, PessoaFormularioComponent],
  imports: [
    CommonModule,
    CrudModule
  ],
  exports: [
    PessoaListagemComponent,
    PessoaFormularioComponent,
    PessoaRoutingModule,
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
