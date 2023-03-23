import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { PessoaListagemComponent } from './pessoa-listagem/pessoa-listagem.component';

const routes: Routes = [
  { path: '', component: PessoaListagemComponent, data: { breadcrumb: 'Pessoas' } },
  { path: 'form', component: PessoaFormularioComponent, data: { breadcrumb: 'Nova Pessoa' } },
  { path: 'form/:id', component: PessoaFormularioComponent, data: { breadcrumb: 'Editar Pessoa' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
