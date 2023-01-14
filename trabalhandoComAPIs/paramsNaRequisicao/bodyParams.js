const express = require('express');
const app = express(); //instancia;
const PORT = 3000;


//MiddleWare
app.use(express.json()); // Para Pegar coisas da Requisicao, Body

//BODY pode receber -> GET, POST, PUT, PATCH
/*
{
    "name": "Joao gabriel",
    "cidade": "campo grande",
    "livros": [
        "Meditacoes",
        "Revolução dos bixos",
        "O manual"
    ]
}
*/

app.route("/")
  .get((req, res) => {
   res.send(req.body)
   const { name, cidade } = req.body;
   console.log(name + " de " + cidade);
  });




app.listen(PORT, () => console.log(`Listen at port: ${PORT}...`));