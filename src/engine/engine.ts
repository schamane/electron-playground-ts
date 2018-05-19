export class Engine {
  private name: string;

  constructor(arg1: string, arg2: number) {
    console.log(`constructor: ${arg1} :: ${arg2}`);
    this.name = arg1;
  }

  public someFunc(arg3: any): string {
    return "Ok: " + this.name;
  }
}
