// Encapsulation

// Definition - Encapsulation is a mechanism of wrapping
// data and functions together into a single unit.

class Bank {
  #balance = 0; //private property
  deposit(amount) {
    this.#balance += amount;
  }
  getBalance() {
    return `Balance: ${this.#balance}`;
  }
}

let bank = new Bank();
bank.deposit(100);
console.log(bank.getBalance());

// console.log(bank.#balance); cannot access private property
