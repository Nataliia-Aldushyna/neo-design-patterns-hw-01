import { AbstractBook } from './AbstractBook';

export class Copy {
  private book: AbstractBook;
  private available: boolean = true;

  constructor(book: AbstractBook) {
    this.book = book;
  }

  public getBook(): AbstractBook {
    return this.book;
  }

  public isCopyAvailable(): boolean {
    return this.available;
  }

  public markAsBorrowed(): void {
    this.available = false;
  }

  public markAsReturned(): void {
    this.available = true;
  }
}