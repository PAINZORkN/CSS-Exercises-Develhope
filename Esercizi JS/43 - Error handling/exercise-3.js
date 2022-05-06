class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error('L\'importo non può essere negativo'); 
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error('L\'importo fornito non può essere negativo'); 
    }

    if (this.#amount < amount) {
      throw new Error('Non puoi prelevare più del saldo del conto'); 
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Ops, qualcosa è andato storto durante l\'operazione');
}