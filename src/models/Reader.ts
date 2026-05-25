import { Copy } from "./Copy";

export class Reader {
  private id: string;
  private name: string;
  private borrowedCopies: Copy[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public addBorrowedCopy(copy: Copy): void {
    this.borrowedCopies.push(copy);
  }

  public removeBorrowedCopy(copy: Copy): void {
    this.borrowedCopies = this.borrowedCopies.filter(c => c !== copy);
  }

  public getBorrowedCopies(): Copy[] {
    return [...this.borrowedCopies];
  }

  public getBorrowedCount(): number {
    return this.borrowedCopies.length;
  }
}