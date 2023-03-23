import { PessoaModel } from './model/pessoa-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoa1 = new PessoaModel("01", "Vitor Miguel Zapellini", "Vitor", "08813001010", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa2 = new PessoaModel("02", "Pessoa2", "Vitor", "90588249009", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa3 = new PessoaModel("03", "pessoa3", "Vitor", "66002145036", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa4 = new PessoaModel("04", "pessoa4", "Vitor", "28315362003", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa5 = new PessoaModel("05", "pessoa5", "Vitor", "81105065006", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");
  private pessoa6 = new PessoaModel("06", "pessoa6", "Vitor", "10087501074", "zapellini.vitor@gmail.com", true, "15 de novembro", "123", "Centro", "N/A", "Pomerode", "SC");

  private readonly dadosPessoas: PessoaModel[] = [this.pessoa1, this.pessoa2, this.pessoa3, this.pessoa4, this.pessoa5, this.pessoa6];


  constructor() { }

  obterListaDePessoas(): Observable<PessoaModel[]> {
    return new Observable(observable => {
      observable.next(this.dadosPessoas);
      observable.complete();
    });
  }
}
