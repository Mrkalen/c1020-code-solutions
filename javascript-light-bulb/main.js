var isOnOff = 0;

var $bulb = document.querySelector('.bulb');
var $container = document.querySelector('.container');

$bulb.addEventListener('click', function onOff(event) {
  isOnOff++;
  if (isOnOff % 2) {
    $bulb.className = 'bulb off';
    $container.className = 'container off';
  } else {
    $bulb.className = 'bulb on';
    $container.className = 'container on';
  }
});
