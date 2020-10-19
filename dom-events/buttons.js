// click event

function handlClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', $buttonClicked);
}

var $buttonClicked = document.querySelector('.click-button');

$buttonClicked.addEventListener('click', handlClick);

// mouseOver event

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', $hovered);
}

var $hovered = document.querySelector('.hover-button');

$hovered.addEventListener('mouseover', handleMouseover);

// doubleClick event

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', $doubleClicked);
}

var $doubleClicked = document.querySelector('.double-click-button');

$doubleClicked.addEventListener('dblclick', handleDoubleClick);
