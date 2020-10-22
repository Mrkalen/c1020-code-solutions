var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    console.log('event.target', event.target);
    console.log('correct');
    for (i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {

      }
    }
  }
  console.log('event.target', event.target);
  console.log('wrong');
});
