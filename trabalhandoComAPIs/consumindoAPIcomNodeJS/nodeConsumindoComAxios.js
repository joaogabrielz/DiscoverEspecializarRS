const express = require('express');
const app = express(); //instancia;
const PORT = 3000;
const axios = require('axios');

//EXPRESS nao faz requisicao em api, é usado para criar nossa API
//Ele nao faz Requisicao em API, para isso usaremos AXIOS

//MiddleWare
app.use(express.json()); // Para Pegar coisas da Requisicao, Body

// POstman:
// https://api.github.com/users/JAKELINY
// http://localhost:3000



app.route('/').get((req, res) => {

  axios.get('https://api.github.com/users/joaogabrielz')
  .then(result => res.send(`<img src="${result.data.avatar_url}"></img>`))
  .catch((e) => console.error(e));

})


app.listen(PORT, () => console.log("Listening at: " + PORT + "..."));