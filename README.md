# OOP Library System (TypeScript)
## Домашнє завдання до Теми Основи об’єктно-орієнтованого програмування

## 📌 Опис завдання

Цей проєкт є навчальною моделлю бібліотечної системи, реалізованою з використанням принципів об’єктно-орієнтованого програмування (ООП) у TypeScript.

Система імітує роботу бібліотеки та включає:
- книги та електронні книги
- авторів
- фізичні копії книг
- читачів
- бібліотеку як агрегатор сутностей
- сервіс позичання книг

Основна мета — продемонструвати застосування:
- інкапсуляції
- наслідування
- абстракції
- поліморфізму
- композиції

---

## 🚀 Як запустити проєкт

Встановити залежності:

```bash
npm install
```

Запустити проєкт:

```bash
npx ts-node src/main.ts
```

---

## ▶️ Приклад виконання

```txt
Attempting to borrow copy1...
Borrow result: true

Attempting to borrow copy1 again...
Borrow result: false

Attempting to return copy1...
Copy1 is available: true

Book descriptions:
Physical book "The Great Book" by John Doe (2020)
E-book "Digital Book" by John Doe (2021) - Available at: <https://example.com/ebook>
```

---

## 📁 Структура проєкту

```txt
src/
  models/
    Author.ts
    Book.ts
    Copy.ts
    Reader.ts
    Library.ts
    AbstractBook.ts
    EBook.ts
  services/
    BorrowService.ts
  main.ts
```

---

## 📌 Примітки

- Проєкт реалізовано без використання сторонніх бібліотек
- `AbstractBook` є абстрактним класом і не може бути інстанційований напряму
- Код демонструє принципи ООП:
  - інкапсуляцію
  - наслідування
  - абстракцію
  - поліморфізм
  - композицію