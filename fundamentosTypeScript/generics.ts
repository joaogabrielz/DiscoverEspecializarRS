
//Union
// function useState(){
//   let state: number | string;

//   function get(){
//     return state;
//   }
//   function set(newValue: number | string){
//     state = newValue;
//   }

//   return { get, set};
// }

// let newState = useState();
// newState.get();

// newState.set(1);
// newState.set('rodrigo');

//GENERICS

/* convencoes, nao obrigacao
S => state
T => type
K => key
V => value
E => element
*/

// function useState<T>(){
//   let state: T;

//   function get(){
//     return state;
//   }
//   function set(newValue: T){
//     state = newValue;
//   }

//   return { get, set};
// }

// let newState = useState<string>();
// newState.get();

// // newState.set(1); // error
// newState.set('rodrigo');




// function useState<T extends number | string>(){
//   let state: T;

//   function get(){
//     return state;
//   }
//   function set(newValue: T){
//     state = newValue;
//   }

//   return { get, set};
// }

//let newState = useState<string>(); 

// let newState = useState<number>(); // respeitar o tipo

// newState.get();

// newState.set(1); // error
//newState.set('rodrigo');



function useState<T extends string | number = string>(){ 
    // '= string' caso nao tenha number ou string, padrao vai ser string
  let state: T;

  function get(){
    return state;
  }
  function set(newValue: T){
    state = newValue;
  }

  return { get, set};
}


let newState = useState(); // quando nao definir um tipo
newState.get();

//newState.set(12); 
newState.set('rodrigo');