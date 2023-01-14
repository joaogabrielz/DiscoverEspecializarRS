// usando API node-api-discover
//http://localhost:5500/api

const url = 'http://localhost:5500/api';

function getUsers() {

  axios.get(url)
    .then((res) => res.data)
    .then((data) => {
      renderApiResult.textContent = JSON.stringify(data)
      console.log(data)
    })
    .catch((e) =>{
      console.error(e);
    })
};

function getUser(id) {

  const updatedUrl = url + "/" + id;

  axios.get(updatedUrl)
    .then((res) => res.data)
    .then((data) => {
      userId.textContent = data.id;
      userName.textContent = data.name;
      userCity.textContent = data.city;    
      userAvatar.src = data.avatar;
    })
    .catch((e) =>{
      console.error(e);
    })
}


const NEW_USER = {
  name: 'mateus sounza',
  avatar: 'https://picsum.photos/200/300',
  city: 'canada'
}

function addUser(newUser) {

  axios.post(url, newUser)
    .then((response) => response.data)
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

  axios.put(updatedUrl, updatedUser)
    .then((response) => response.data)
    .then((data) => {
      alertApi.textContent = data
    })
    .catch((e) => console.error(e));
}


function deleteUser(id) {

  axios.delete(`${url}/${id}`)
    .then((response) => response.data)
    .then((data) => {
      alertApi.textContent = data
    })
    .catch((e) => console.error(e));
}


getUsers();
getUser(4);
//addUser(NEW_USER);
//updateUser(UPDATED_USER, 3);
//deleteUser(5);

