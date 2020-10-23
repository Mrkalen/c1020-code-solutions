var count = 0;

var $keyPress = document.querySelectorAll('span');

var $focus = document.querySelector('body');

$focus.addEventListener('keydown', pressedKey);

var i = 0;

function pressedKey(event) {
  console.log('typeOf', typeof event.key);
  console.log('typeOf', typeof $keyPress[i].textContent);
  console.log('event.key:', event.key);
  console.log('keyPress:', $keyPress[i].textContent);
  if (event.key === $keyPress[i].textContent) {
    $keyPress[i].setAttribute('class', 'correct');
    i += 1;
    $keyPress[i].setAttribute('class', 'underline');
  } else {
    $keyPress[i].setAttribute('class', 'wrong underline');
  }
  if (event.key) {
    count++;
    console.log('count:', count);
  }
}
