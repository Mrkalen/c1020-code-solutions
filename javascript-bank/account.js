/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0) {
    this.transactions.push(new Transaction('withdraw', amount));
    return true;
  }
  return false;

};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
