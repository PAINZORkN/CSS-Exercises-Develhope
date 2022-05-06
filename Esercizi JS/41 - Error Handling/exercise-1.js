class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#amount += amount;
    } else {
      try {
        throw Error(`L'importo non può essere negativo rispetto al conto.`)
      } catch (err) {
        console.log('Error:', err.message)
      }
    }
  }

  withdraw(amount) {
    if (amount < 0 || amount > this.#amount) {
      try {
        throw Error(`L'importo non può essere negativo o maggiore del conto.`)
      } catch (err) {
        console.log('Error:', err.message)
      }
    } else {
      this.#amount -= amount;
    }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000);
bankAccount.view();