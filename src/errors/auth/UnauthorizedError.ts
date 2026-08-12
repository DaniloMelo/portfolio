export class UnauthorizedError extends Error {
  constructor(message: string = "Usuário não autenticado.") {
    super(message);

    this.name = "UnauthorizedError";
  }
}
