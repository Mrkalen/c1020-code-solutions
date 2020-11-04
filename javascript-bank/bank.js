/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    this.accounts.push(new Account(this.nextAccountNumber, holder));
    this.accounts[this.nextAccountNumber - 1].deposit(balance);
    this.nextAccountNumber++;
  } else {
    return null;
  }
  return this.nextAccountNumber - 1;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  if (this.accounts.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.accounts.length; i++) {
      total += this.accounts[i].getBalance();
    }
    return total;
  }
};
