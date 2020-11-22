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

// $carousel.addEventListener('click', function () {
//   clearInterval(advanceIntervalId);

//   if (event.target === $chevLeft) {
//     for (var i = 0; i < $image.length; i++) {
//       if ($image[i].getAttribute('class') === 'image') {
//         $image[i].setAttribute('class', 'image hidden');
//         $circle[i].setAttribute('class', 'far fa-circle selector circle');
//         if (i === 0) {
//           $image[$image.length - 1].setAttribute('class', 'image');
//           $circle[$circle.length - 1].setAttribute('class', 'fas fa-circle selector circle');
//           break;
//         } else {
//           $image[i - 1].setAttribute('class', 'image');
//           $circle[i - 1].setAttribute('class', 'fas fa-circle selector circle');
//         }
//       }
//     }
//   } else if (event.target === $chevRight) {
//     for (var j = 0; j < $image.length; j++) {
//       if ($image[j].getAttribute('class') === 'image') {
//         $image[j].setAttribute('class', 'image hidden');
//         $circle[j].setAttribute('class', 'far fa-circle selector circle');
//         if (j === $image.length - 1) {
//           $image[0].setAttribute('class', 'image');
//           $circle[0].setAttribute('class', 'fas fa-circle selector circle');
//         } else {
//           $image[j + 1].setAttribute('class', 'image');
//           $circle[j + 1].setAttribute('class', 'fas fa-circle selector circle');
//           break;
//         }
//       }
//     }
//   } else if (event.target.getAttribute('class') === 'far fa-circle selector circle') {
//     for (var k = 0; k < $circle.length; k++) {
//       if ($circle[k].getAttribute('class') === 'fas fa-circle selector circle') {
//         $circle[k].setAttribute('class', 'far fa-circle selector circle');
//         $image[k].setAttribute('class', 'image hidden');
//       }
//     }
//     for (var l = 0; l < $circle.length; l++) {
//       if (event.target.getAttribute('id') === $circle[l].getAttribute('id')) {
//         $image[l].setAttribute('class', 'image');
//       }
//       event.target.setAttribute('class', 'fas fa-circle selector circle');
//     }
//   }
//   advanceIntervalId = setInterval(advance, 3000);
// });
