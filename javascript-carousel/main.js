var $carousel = document.querySelector('.carousel');
var $chevLeft = document.querySelector('.left');
var $chevRight = document.querySelector('.right');
var $image = document.querySelectorAll('.image');
var $circle = document.querySelectorAll('.circle');

var activeIndex = 0;

$carousel.addEventListener('click', function () {
  clearInterval(advanceIntervalId);

  if (event.target === $chevLeft) {
    if (activeIndex !== 0) {
      activeIndex += -1;
      revealImage(activeIndex);
    } else {
      activeIndex = $image.length - 1;
      revealImage(activeIndex);
    }
  } else if (event.target === $chevRight) {
    if (activeIndex !== $image.length - 1) {
      activeIndex += 1;
      revealImage(activeIndex);
    } else {
      activeIndex = 0;
      revealImage(activeIndex);
    }
  } else if (event.target.className === 'far fa-circle selector circle') {
    event.target.setAttribute('class', 'fas fa-circle selector circle');
    for (var i = 0; i < $circle.length; i++) {
      if ($circle[i] === event.target) {
        activeIndex = i;
        revealImage(activeIndex);
      }
    }
  }
  advanceIntervalId = setInterval(advance, 3000);
});

function revealImage(index) {
  for (var i = 0; i < $image.length; i++) {
    if (i !== activeIndex) {
      $image[i].setAttribute('class', 'image hidden');
      $circle[i].setAttribute('class', 'far fa-circle selector circle');
    }
  }
  $image[index].setAttribute('class', 'image');
  $circle[index].setAttribute('class', 'fas fa-circle selector circle');
}

var advanceIntervalId = setInterval(advance, 3000);

function advance() {
  if (activeIndex !== $image.length - 1) {
    activeIndex += 1;
    revealImage(activeIndex);
  } else {
    activeIndex = 0;
    revealImage(activeIndex);
  }
}
