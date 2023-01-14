// function showmsg(message: string): void{
//   console.log(showmsg);
//   return message; // error nao aceita retorno pois é void
// }

// Quando funcao nao tem retorno fica implicito void, eutomatico

// function showmsg2(message: string): void{
//   console.log(showmsg);
// }

// function showmsg3(message: string): number{
//   // return message; // error
//   return 2; // error
// }


// POde omitir esse tipo e o TS define baseado no tipo que vc ta retornado
function showmsg4(message: string){
   return message;
}
console.log(showmsg4('oi, jao')); // string