const express = require('express');
const app = express(); //instancia;
const PORT = 3000;


//MiddleWare
app.use(express.json()); 

//http://localhost:3000/
//http://localhost:3000/joao/
//http://localhost:3000/identidade/about me

app.route("/")
  .get((req, res) => {
   res.send("OLa")
  });

app.route("/:var")
  .get((req, res) => {
   res.send(req.params.var)
  });

  app.route("/:identidade/:nome")
  .get((req, res) => {
   res.send(req.params.nome)
  });



app.listen(PORT, () => console.log(`Listen at port: ${PORT}...`));