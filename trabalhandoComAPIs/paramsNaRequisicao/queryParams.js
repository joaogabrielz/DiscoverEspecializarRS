const express = require('express');
const app = express(); //instancia;
const PORT = 3000;


//MiddleWare
app.use(express.json()); 


//http://localhost:3000?nome=joaogabriel&cidade=campo Grande

app.route("/").get((req, res) => {
   res.send(req.query);
   let { cidade } = req.query;
   console.log(cidade);
  });

  app.route("/about/user").get((req, res) => {
    res.send(req.query);
    console.log(req.query.id);
   });


app.listen(PORT, () => console.log(`Listen at port: ${PORT}...`));