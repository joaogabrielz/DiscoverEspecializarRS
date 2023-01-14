// Http client baseado em promesas para js e node

// fetch do JS -> usa axios como Padrão
// Mas no Node Não

const axios = require('axios');

//console.log(axios.get('https://api.github.com/users/maykbrito')) // promise pending

// axios.get('https://api.github.com/users/maykbrito')
//   .then(response => {
//     const user = response.data;

//     // axios.get(user.repos_url)
//     //   .then(repos => console.log(repos.data))
//     //   .catch(err => console.log(err));

//     // return axios.get(user.repos_url);
//   })
//   .then(repos => console.log(repos.data))
//   .catch(err => console.log(err));


  axios
  .get('https://api.github.com/users/maykbrito')
  .then(response => axios.get(response.data.repos_url))
    .then(repos => console.log(repos.data))
    .catch(err => console.log(err));