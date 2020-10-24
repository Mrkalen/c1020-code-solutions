var count = 0;
var letterCount = 0;

var $keyPress = document.querySelectorAll('span');

var $focus = document.querySelector('body');

var $accuracyCounter = document.querySelector('.counter');

var $retry = document.querySelector('button');

$focus.addEventListener('keydown', pressedKey);

function pressedKey(event) {
  if (letterCount === 30) {
    return;
  }
  if (event.key) {
    count++;
  }
  if (event.key === $keyPress[letterCount].textContent) {
    $keyPress[letterCount].setAttribute('class', 'correct');
    letterCount += 1;
    if (letterCount === 30) {
      $retry.setAttribute('class', 'active');

      $retry.textContent = 'Try again?';

      var accuracy = Math.floor(100 / (count / letterCount));

      $accuracyCounter.textContent = 'Accuracy:' + accuracy + '%';
      return;
    }
    $keyPress[letterCount].setAttribute('class', 'underline');
  } else {
    $keyPress[letterCount].setAttribute('class', 'wrong underline');
  }
}

$retry.addEventListener('click', function (event) {
  location.reload();
});
