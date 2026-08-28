export class InvalidCaptchaError extends Error {
  constructor(message: string = "Falha na verificação de segurança") {
    super(message);
    this.name = "InvalidCaptchaError";
  }
}
