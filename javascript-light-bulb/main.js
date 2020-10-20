var $bulb = document.querySelector('.bulb');
var $container = document.querySelector('.container');

$bulb.addEventListener('click', function onOff(event) {
  if ($bulb.className === 'bulb on' && $container.className === 'container on') {
    $bulb.className = 'bulb off';
    $container.className = 'container off';
  } else {
    $bulb.className = 'bulb on';
    $container.className = 'container on';
  }
});
