// Erros antes de compilar


// const userName = 'rodrigo';

// userName(); // error type string


// const user = {
//   name: 'joao',
//   email: 'zaza@gmail.com'
// };

// console.log(user.location); // error nao existe


function sum(a: number, b: number){
  return a + b;
}


console.log(sum(1,2));

//console.log(sum('1',2)); // error

const txt = 'RODD'
console.log(txt.toLowerCase());