// Promessa que algo ira acontecer, mas pode ou nao ocorrer

// Pending, fullfiled, rejected, settled

let aceitar = true;
console.log("Pedir uber: \n");

const promesa = new Promise((res, rej) => {
  if (aceitar) {
    return res("Uber chegou! :)");
  } else {
    return rej("x - Uber cancelou");
  }
});

console.log("Aguardando...");

promesa
  .then((res) => console.log(res))
  .catch((e) => console.log(e))
  .finally(() => console.log("\nConclusao pedido.."));
