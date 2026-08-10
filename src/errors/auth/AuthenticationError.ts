export class AuthenticationError extends Error {
  constructor(message: string = "Credenciais não encontradas.") {
    super(message);

    this.name = "AuthenticationError";
  }
}
