export class InvalidCredentialsError extends Error {
  constructor(message: string = "Email ou senha inválidos.") {
    super(message);

    this.name = "InvalidCredentialsError";
  }
}
