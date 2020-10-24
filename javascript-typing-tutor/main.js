var count = 0;

var $keyPress = document.querySelectorAll('span');

var $focus = document.querySelector('body');
console.log('focus:', $focus);
var $accuracyCounter = document.querySelector('.counter');
console.log('accuracy counter:', $accuracyCounter);
$focus.addEventListener('keydown', pressedKey);

var i = 0;

function pressedKey(event) {
  if (i === 30) {
    return;
  }
  if (event.key === $keyPress[i].textContent) {
    $keyPress[i].setAttribute('class', 'correct');
    i += 1;
    if (i === 30) {
      return;
    }
    $keyPress[i].setAttribute('class', 'underline');
  } else {
    $keyPress[i].setAttribute('class', 'wrong underline');
  }
  if (event.key) {
    count++;
  }
  var accuracy = Math.floor(100 / (count / i));

}
