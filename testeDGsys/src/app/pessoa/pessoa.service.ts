import { PessoaModel } from './model/pessoa-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  //#region mock
  private pessoa1 = new PessoaModel("01", "Vitor Miguel Zapellini", "Vitor", "08813001010", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa2 = new PessoaModel("02", "Pessoa2", "Vitor", "90588249009", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa3 = new PessoaModel("03", "pessoa3", "Vitor", "66002145036", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa4 = new PessoaModel("04", "pessoa4", "Vitor", "28315362003", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa5 = new PessoaModel("05", "pessoa5", "Vitor", "81105065006", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa6 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa7 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa8 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa9 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa01 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa02 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa03 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa04 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa05 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa06 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa07 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa08 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa09 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa10 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa20 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa30 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa40 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa50 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa60 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa70 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  //#endregion

  private readonly dadosPessoas: PessoaModel[] = [this.pessoa1, this.pessoa2, this.pessoa3, this.pessoa4, this.pessoa5, this.pessoa6, this.pessoa7, this.pessoa8, this.pessoa9,
  this.pessoa01, this.pessoa02, this.pessoa03, this.pessoa04, this.pessoa05, this.pessoa06, this.pessoa07, this.pessoa08, this.pessoa09, this.pessoa10, this.pessoa20,
  this.pessoa30, this.pessoa40, this.pessoa50, this.pessoa60, this.pessoa70];

  constructor() { }

  obterListaDePessoas(): Observable<PessoaModel[]> {
    return new Observable(observable => {
      observable.next(this.dadosPessoas);
      observable.complete();
    });
  }

  oberPessoaPorId(pessoaId: string): Observable<PessoaModel> {
    return new Observable(observable => {
      observable.next(this.dadosPessoas.find(pessoa => pessoa.Id === pessoaId));
      observable.complete();
    });
  }

  criarNovaPessoa(pessoa: PessoaModel): Observable<any> {
    return new Observable(observable => {
      observable.next(console.log(pessoa.Nome + ' adicionado'));
      observable.complete();
    });
  }

  atualizarPessoa(pessoa: PessoaModel): Observable<any> {
    return new Observable(observable => {
      observable.next(console.log(pessoa.Nome + ' atualizada'));
      observable.complete();
    });
  }

  excluirPessoa(pessoaId: number): Observable<any> {
    return new Observable(observable => {
      observable.next(console.log(pessoaId + ' excluido'));
      observable.complete();
    });
  }
}
