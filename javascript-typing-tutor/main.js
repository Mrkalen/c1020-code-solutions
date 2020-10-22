var $keyPress = document.querySelectorAll('span');

var $focus = document.querySelector('body');

$focus.addEventListener('keydown', pressedKey);

var i = 0;

function pressedKey(event) {
  console.log('event.key:', event.key);
  console.log('keyPress:', $keyPress[i].textContent);
  if ($keyPress[i].textContent === event.key) {
    $keyPress[i].setAttribute('class', 'correct');
    i += 1;
  } else {
    $keyPress[i].setAttribute('class', 'wrong');
  }
}
