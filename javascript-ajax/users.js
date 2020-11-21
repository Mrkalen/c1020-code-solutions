var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('xhr status: ', xhr.status);
  console.log('xhr response: ', xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var response = xhr.response;
    var user = document.createElement('li');
    user.textContent = response[i].name;
    $userList.appendChild(user);
  }
});
xhr.send();
