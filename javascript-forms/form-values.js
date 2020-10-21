var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var formValues = {};
  formValues.Name = $contactForm.elements.name.value;
  formValues.Email = $contactForm.elements.email.value;
  formValues.Message = $contactForm.elements.message.value;
  console.log(formValues);
  $contactForm.reset();
});
