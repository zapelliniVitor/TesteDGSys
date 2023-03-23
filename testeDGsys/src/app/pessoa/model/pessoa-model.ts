export class PessoaModel {
  constructor(
    public Id?: string,
    public Nome?: string,
    public Apelido?: string,
    public CPF?: string,
    public Email?: string,
    public Ativo?: boolean,
    public Rua?: string,
    public Numero?: string,
    public Bairro?: string,
    public Complemento?: string,
    public Municipio?: string,
    public Uf?: string
  ) { }
}
