import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { PessoaModel } from './../model/pessoa-model';
import { PessoaService } from './../pessoa.service';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrls: ['./pessoa-listagem.component.css'],
})
export class PessoaListagemComponent implements OnInit {

  public listaPessoas: PessoaModel[] = [];
  public cols: any[] = [];


  constructor(
    private pessoaService: PessoaService,
  ) { }

  ngOnInit(): void {
    this.obterTodasAsPessoas();
    this.preencherColunas();
  }

  EditarPessoa(): void {
    console.log('Editar');
  }

  ExcluirPessoa(): void {
    console.log('Excluir');
  }

  //#region Métodos privados
  private obterTodasAsPessoas(): void {
    this.pessoaService.obterListaDePessoas().subscribe({
      next: (retorno) => this.listaPessoas = retorno,
      error: () => console.log("algo de errado não está certo")
    });
  }

  private preencherColunas(): void {
    this.cols = [
      { field: 'Id', header: 'ID' },
      { field: 'Nome', header: 'Nome' },
      { field: 'CPF', header: 'CPF' },
      { field: 'Municipio', header: 'Municipio' },
    ];
  }

  //#endregion
}
