"use strict";
function showTicket(user, ticket) {
    console.log(`OLa ${user !== null && user !== void 0 ? user : 'Usuario padrao'}. seu bilhete é ${ticket}`);
}
showTicket('joao gabs', 233);
// esse codigo TS e transformado em Javascritpt
//ex: ${ user ?? 'Usuario padrao' } (TYPESCRIPT)
// é convertido em js ${ user != null && user !== void 0 ? user : 'Usuario padrao' }
//# sourceMappingURL=compilacao.js.map