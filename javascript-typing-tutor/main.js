var $keypress = document.querySelectorAll('span');

var $focus = document.querySelector('body');

$focus.addEventListener('keydown', pressedKey);

function pressedKey(event) {
  console.log(event.key);
  // for (var i = 0; i < $keypress.length; i++) {
  //   if ($keypress[i] === event.key) {
  //     [i].className('correct');
  //   } else {
  //     [i].className('wrong');
  //     i--;
  //   }
  // }
}
