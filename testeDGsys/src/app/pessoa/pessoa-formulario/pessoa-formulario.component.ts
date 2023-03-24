import { AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { PessoaService } from './../pessoa.service';

@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.css'],
  providers: [MessageService]
})
export class PessoaFormularioComponent implements OnInit {

  pessoaForm!: FormGroup;
  private routerId?: string;

  abas!: {
    nome: string;
    conteudo: TemplateRef<string>;
  }[];

  opcoesAtivo: any[] = [
    { label: 'Sim', value: true },
    { label: 'Não', value: false }
  ];

  constructor(
    private cd: ChangeDetectorRef,
    private pessoaService: PessoaService,
    private FormBuilder: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.routerId = this.route.snapshot.paramMap.get('id') || '';

    this.construirFormulario();
    this.loadForm()
  }

  onSubmit(): void {
    if(!this.pessoaForm.valid){
      this.messageService.add({ severity: 'warn', summary: 'Ops!', detail: 'Revise o formulário, algo não está certo.' });
      return;
    }

    this.routerId ? this.criarNovaPessoa() : this.atualizarPessoa();
  }

  //#region Métodos Privados
  criarNovaPessoa(): void {
    this.pessoaService.criarNovaPessoa(this.pessoaForm.value).subscribe({
      next: () => {
        this.messageService.add({ severity: 'info', summary: 'Sucesso!', detail: 'Novo registro!' });
        this.router.navigate([`/pessoas`]);
      },
      error: (error) => this.messageService.add({ severity: 'warn', summary: 'Erro', detail: error || 'Você cancelou a ação' })
    });
    this.cd.detectChanges();
  }

  atualizarPessoa(): void {
    this.pessoaService.atualizarPessoa(this.pessoaForm.value).subscribe({
      next: () => {
        this.messageService.add({ severity: 'info', summary: 'Sucesso!', detail: 'Registro Atualizado!' });
        this.router.navigate([`/pessoas`]);
      },
      error: (error) => this.messageService.add({ severity: 'warn', summary: 'Erro', detail: error || 'Você cancelou a ação' })
    });
    this.cd.detectChanges();

  }
  //#endregion

  //#region Métodos Protegidos
  protected loadForm(): void {
    if (this.routerId) {
      this.pessoaService.oberPessoaPorId(this.routerId).subscribe({
        next: (pessoa) => {
          this.pessoaForm?.patchValue(pessoa);
          this.pessoaForm?.markAsDirty();
          this.cd.detectChanges();
        },
        error: () => this.messageService.add({ severity: 'warn', summary: 'Cancelado', detail: 'Você cancelou a ação' })
      })
    }
    this.cd.detectChanges();
    console.log(this.pessoaForm);
  }

  protected construirFormulario() {
    const validarCPF = '([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})';

    this.pessoaForm = this.FormBuilder.group({
      Id: [null],
      Nome: [null, [Validators.minLength(5), Validators.maxLength(50)]],
      Apelido: [null, [Validators.minLength(5), Validators.maxLength(50)]],
      CPF: [null, [Validators.minLength(11), Validators.maxLength(11), Validators.pattern(validarCPF)]],
      Email: [null, [Validators.minLength(2), Validators.maxLength(70), Validators.required]],
      Ativo: [true],
      Rua: [null, [Validators.minLength(5), Validators.maxLength(50)]],
      Numero: [null, [Validators.max(99999999), Validators.min(0)]],
      Bairro: [null, [Validators.minLength(5), Validators.maxLength(20)]],
      Complemento: [null, [Validators.maxLength(50)]],
      Municipio: [null, [Validators.minLength(3), Validators.maxLength(25)]],
      Uf: [null, [Validators.minLength(2), Validators.maxLength(2), Validators.required]],
    });
  }
  //#endregion
}
