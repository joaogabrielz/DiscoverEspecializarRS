// usando API node-api-discover
//http://localhost:5500/api

const url = 'http://localhost:5500/api';

function getUsers() {

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderApiResult.textContent = JSON.stringify(data)
    })
    .catch((e) =>{
      console.error(e);
    })
};

function getUser(id) {
  const updatedUrl = url + "/" + id;
  fetch(updatedUrl)
    .then((res) => res.json())
    .then((data) => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch((e) =>{
      console.error(e);
    })
}


const NEW_USER = {
  name: 'jota jota',
  avatar: 'https://picsum.photos/200/300',
  city: 'Cuiaba'
}

function addUser(newUser) {

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      alertApi.textContent = data
    })
    .catch((e) => console.error(e));
}


const UPDATED_USER = {
  name: 'kaka loureiro',
  avatar: 'https://picsum.photos/400/500',
  city: 'london'
}

function updateUser(updatedUser, id) {

  const updatedUrl = url + "/" + id;

  fetch(updatedUrl, {
    method: 'PUT',
    body: JSON.stringify(updatedUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      alertApi.textContent = data
    })
    .catch((e) => console.error(e));
}


function deleteUser(id) {

  fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      alertApi.textContent = data
    })
    .catch((e) => console.error(e));
}


getUsers();
getUser(1);
//addUser(NEW_USER);
//updateUser(UPDATED_USER, 3);
//deleteUser(3);

