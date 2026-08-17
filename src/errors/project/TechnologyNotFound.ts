export class TechnologyNotFound extends Error {
  constructor(message: string = "Tecnologia não existe") {
    super(message);

    this.name = "TechnologyNotFound";
  }
}
