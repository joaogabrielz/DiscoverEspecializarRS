
type Point = {
  x: number;
  y: number;
}


function printCoord(points: Point){
  console.log(`o exio x é: ${points.x} e y é: ${points.y}`)
}

printCoord({x: 101, y: 50});


type User = {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean
}

const newUser: User = {
  name: 'joao',
  email: 'jj@2.com',
  age: 22,
  isAdmin: true
};
console.log(newUser);

newUser.name = 'pedro';
newUser.isAdmin = false;

console.log(newUser);
