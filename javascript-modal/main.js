var isOff = false;

var $openModal = document.querySelector('.open-button');
var $modalContainer = document.querySelector('.modal-container');

$openModal.addEventListener('click', function popup(event) {
  isOff = !isOff;
  if (isOff) {
    $modalContainer.className = 'modal-container';
  }
  isOff = !isOff;
});

var isOn = false;

var $modalButton = document.querySelector('.modal-button');

$modalButton.addEventListener('click', function closePopup(event) {
  isOn = !isOn;
  if (isOn) {
    $modalContainer.className = 'modal-container off';
  }
  isOn = !isOn;
});
