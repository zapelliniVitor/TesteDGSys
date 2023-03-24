import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

import { PessoaModel } from './../model/pessoa-model';
import { PessoaService } from './../pessoa.service';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrls: ['./pessoa-listagem.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class PessoaListagemComponent implements OnInit {

  public listaPessoas: PessoaModel[] = [];
  public cols: any[] = [];


  constructor(
    private pessoaService: PessoaService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obterTodasAsPessoas();
    this.preencherColunas();
  }

  editarOuAdicionarPessoa(pessoaId?: number): void {
    pessoaId ? this.router.navigate([`/pessoas/form/${pessoaId}`]) : this.router.navigate([`/pessoas/form`]);
  }

  excluirPessoa(pessoaId: number): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir está pessoa?',
      header: 'Deletar',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.pessoaService.excluirPessoa(pessoaId).subscribe({
          next: () => this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }),
          error: () => this.messageService.add({ severity: 'error', summary: 'Ops!', detail: 'Operação não sucedida, por favor, tente mais tarde.'})
        })
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Você cancelou a ação' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você cancelou a ação' });
            break;
        }
      }
    });
  }

  //#region Métodos privados
  private obterTodasAsPessoas(): void {
    this.pessoaService.obterListaDePessoas().subscribe({
      next: (retorno) => this.listaPessoas = retorno,
      error: () => this.messageService.add({ severity: 'warn', summary: 'Erro', detail: 'Algo de errado não está certo' })
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
