import { Reader } from '../models/Reader';
import { Copy } from '../models/Copy';

export class BorrowService {
  public borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false;
    }

    copy.markAsBorrowed();
    reader.addBorrowedCopy(copy);

    return true;
  }

  public returnBook(reader: Reader, copy: Copy): void {
    copy.markAsReturned();
    reader.removeBorrowedCopy(copy);
  }
}