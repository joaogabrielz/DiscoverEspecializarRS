interface Userm {
  id?: number,
  name: string
}

let novoUser: Userm = {
  name: 'rod'
}

function printoUser(newUsuario: Userm) {
  console.log(newUsuario.id);
  console.log(newUsuario.name);
}