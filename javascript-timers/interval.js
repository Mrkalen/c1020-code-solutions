var $h1 = document.querySelector('h1');
var timer = 4;
var intervalId = setInterval(majorTom, 1000);
function majorTom() {
  if (timer !== 1) {
    $h1.textContent = --timer;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
