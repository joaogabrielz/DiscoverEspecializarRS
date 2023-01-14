type idType = string | number | undefined; 
// criou tipagem e consegue reaproveitar

let userId: idType;
let adminId: idType;

userId = '1'
userId = 1
//userId = true// error

adminId = '1'
adminId = 1
//adminId = true// error