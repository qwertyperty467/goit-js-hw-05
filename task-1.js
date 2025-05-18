// Завдання 1
// Напиши функцію-конструктор Account, яка створює 
// об'єкт з властивостями login і email. 
// В prototype функції-конструктора добав метод getInfo(), 
// який виводить в консоль значення полів login і email 
// об'єкта який його викликав.
console.log(1);

function Account(login, email) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); 
const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); 
