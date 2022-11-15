export class Card {
  id?: string;
  titulo: string;
  conteudo: string;
  lista: string;

  constructor(id: string, titulo: string, conteudo: string, lista: string) {
    this.id = id;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.lista = lista;
  }
}
