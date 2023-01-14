const express = require('express');
const app = express(); //instancia;
const PORT = 3000;


// app.route("/").get((req, res) => {
//   res.send("<h1>Hello world</h1>")
// });




// MIDDLEWARE (Reconhecer json/usa-lo);
app.use(express.json()); // faz tanto indo req como recebendo dados



app.route("/").post((req, res) => {
  res.send(req.body);
}); // Antes de enviar Pegar req passa pelo MIDDLEWARE



let author = "jakeliny";

app.route("/").get((req, res) => {
  res.send(author)
});

app.route("/").put((req, res) => {
  author = req.body.author; // -> pega so o author do json {"author": "Joao gabriel"}
  res.send(author);
}); // Tambem usa o MIDDLEWARE




app.route("/:id").delete((req, res) => {
  if(req.params.id == 1){
    author = '..';
  }
  res.send("Apagado.. " + req.params.id);
}); // Antes de enviar Pegar req passa pelo MIDDLEWARE


app.listen(PORT, () => console.log(`Listen at port: ${PORT}...`));