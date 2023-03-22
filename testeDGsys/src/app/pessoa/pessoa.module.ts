import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';

import { PessoaService } from './pessoa.service';

@NgModule({
  declarations: [PessoaListagemComponent, PessoaFormularioComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PessoaListagemComponent,
    PessoaFormularioComponent
  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
