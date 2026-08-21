export class RepositionProjectError extends Error {
  constructor(message: string = "Erro ao reposicionar projeto.") {
    super(message);

    this.name = "RepositionProjectError";
  }
}
