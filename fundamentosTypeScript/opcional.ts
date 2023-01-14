type Userx = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; // DEIXA PROPRIEDADE OPICIONAL
}

// const User: Userx = {
//   name: 'joao',
//   email: 'jada@2.com',
//   age: 23, // erro falta isAdmin, se nao for nao opicional
// };

const User: Userx = {
    name: 'joao',
    email: 'jada@2.com',
    age: 23,
  };