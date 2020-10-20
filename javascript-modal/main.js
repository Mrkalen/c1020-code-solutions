
var $openModal = document.querySelector('.open-button');
var $modalContainer = document.querySelector('.modal-container');

$openModal.addEventListener('click', function popup(event) {
  $modalContainer.className = 'modal-container';
});

var $modalButton = document.querySelector('.modal-button');

$modalButton.addEventListener('click', function closePopup(event) {
  $modalContainer.className = 'modal-container off';
});
