"use strict";
// Padrao no TS um avriavel é ANY
let info; // pode guardar qualquer coisa
// CUIDADO ao usar, perde a essencia do TS
info = [1, 2, 3];
info = 'joao';
info = true;
info = 10.4;
function suma(a, b) {
    return a + b;
}
suma(1, 3); // 4
suma('1', 3); // 13
//# sourceMappingURL=tipagemAny.js.map