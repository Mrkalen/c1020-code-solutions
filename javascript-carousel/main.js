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
      hideImage();
      revealImage(activeIndex);
    }
    activeIndex = $image.length - 1;
    hideImage();
    revealImage(activeIndex);
  } else if (event.target === $chevRight) {
    if (activeIndex !== $image.length - 1) {
      activeIndex += 1;
      hideImage();
      revealImage(activeIndex);
    }
    activeIndex = 0;
    hideImage();
    revealImage(activeIndex);
  } else if (event.target.getAttribute('class') === 'far fa-circle selector circle') {
    for (var i = 0; i < $circle.length; i++) {
      if ($circle[i].getAttribute('class') === 'fas fa-circle selector circle') {
        $circle[i].setAttribute('class', 'far fa-circle selector circle');
        $image[i].setAttribute('class', 'image hidden');
      }
    }
    for (var j = 0; j < $circle.length; j++) {
      if (event.target.getAttribute('id') === $circle[j].getAttribute('id')) {
        $image[j].setAttribute('class', 'image');
      }
      event.target.setAttribute('class', 'fas fa-circle selector circle');
    }
  }

  advanceIntervalId = setInterval(advance, 3000);
});

function hideImage() {
  for (var i = 0; i < $image.length; i++) {
    $image[i].setAttribute('class', 'image hidden');
    $circle[i].setAttribute('class', 'far fa-circle selector circle');
  }
}

function revealImage(index) {
  $image[index].setAttribute('class', 'image');
  $circle[index].setAttribute('class', 'fas fa-circle selector circle');
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

var advanceIntervalId = setInterval(advance, 3000);

function advance() {
  for (var m = 0; m < $image.length; m++) {
    if (m !== $image.length - 1) {
      if ($image[m].getAttribute('class') === 'image') {
        $image[m].setAttribute('class', 'image hidden');
        $circle[m].setAttribute('class', 'far fa-circle selector circle');
        $image[m + 1].setAttribute('class', 'image');
        $circle[m + 1].setAttribute('class', 'fas fa-circle selector circle');
        break;
      }
    } else {
      $image[m].setAttribute('class', 'image hidden');
      $circle[m].setAttribute('class', 'far fa-circle selector circle');
      $image[0].setAttribute('class', 'image');
      $circle[0].setAttribute('class', 'fas fa-circle selector circle');
      break;
    }
  }
}
