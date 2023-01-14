// operador UNION , aceitar mais de um Tipo
// usa pipe: |

function printUserId(id: number | string | boolean){
  console.log(`id usuario: ${id}`)
}

printUserId(101);
printUserId('123');
printUserId(true);