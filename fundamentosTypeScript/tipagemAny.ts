// Padrao no TS um avriavel é ANY

let info: any; // pode guardar qualquer coisa

// CUIDADO ao usar, perde a essencia do TS

info = [1,2,3]
info = 'joao';
info = true;
info = 10.4;

function suma(a: any, b: any){
  return a+b;
}

suma(1, 3); // 4
suma('1', 3); // 13