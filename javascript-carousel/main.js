var $carousel = document.querySelector('.carousel');
var $chevLeft = document.querySelector('.left');
var $chevRight = document.querySelector('.right');
var $image = document.querySelectorAll('.image');
var $circle = document.querySelectorAll('.circle');
var $circlesContainer = document.querySelector('.circles');

$carousel.addEventListener('click', function () {
  console.log(event.target.getAttribute('class'));
  debugger;
  if (event.target === $chevLeft) {
    for (var i = 0; i < $image.length; i++) {
      if ($image[i].getAttribute('class') === 'image') {
        $image[i].setAttribute('class', 'image hidden');
        if (i === 0) {
          $image[$image.length - 1].setAttribute('class', 'image');
          break;
        } else {
          $image[i - 1].setAttribute('class', 'image');
        }
      }
    }
  } else if (event.target === $chevRight) {
    for (var j = 0; j < $image.length; j++) {
      if ($image[j].getAttribute('class') === 'image') {
        $image[j].setAttribute('class', 'image hidden');
        if (j === $image.length - 1) {
          $image[0].setAttribute('class', 'image');
        } else {
          $image[j + 1].setAttribute('class', 'image');
          break;
        }
      }
    }
  } else if (event.target.getAttribute('class') === 'far fa-circle selector circle') {
    for (var k = 0; k < $circle.length; k++) {
      if ($circle[k].getAttribute('class') === 'fas fa-circle selector circle') {
        $circle[k].setAttribute('class', 'far fa-circle selector circle');
        $image[k].setAttribute('class', 'image hidden');
      }
    }
  }
  for (var l = 0; l < $circle.length; l++) {
    if (event.target.getAttribute('id') === $circle[l].getAttribute('id')) {
      $image[l].setAttribute('class', 'image');
    }
    event.target.setAttribute('class', 'fas fa-circle selector circle');

  }
});
