/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var sum;
    for (var i = 0; i < numbers.length; i++) {
      if (sum === undefined) {
        sum = numbers[i];
      } else {
        sum += numbers[i];
      }
    }
    return sum;
  },
  getAverage: function (numbers) {
    var sum;
    for (var i = 0; i < numbers.length; i++) {
      if (sum === undefined) {
        sum = numbers[i];
      } else {
        sum += numbers[i];
      }
    }
    var average = sum / numbers.length;
    return average;
  }
};

// subtract(x, y)
