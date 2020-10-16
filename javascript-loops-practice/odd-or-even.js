/* exported oddOrEven */
function oddOrEven(numbers) {
  var strings = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      strings.push('even');
    } else {
      strings.push('odd');
    }
  }
  return strings;
}
