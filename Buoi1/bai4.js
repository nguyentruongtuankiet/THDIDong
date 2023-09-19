let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

console.log("Tính cho bill 1");
let tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
console.log(`Hóa đơn là ${bill1}, tiền boa là ${tip1}, tổng tiền là ${bill1 + tip1}`);

console.log("Tính cho bill 2");
let tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
console.log(`Hóa đơn là ${bill2}, tiền boa là ${tip2}, tổng tiền là ${bill2 + tip2}`);

console.log("Tính cho bill 3");
let tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
console.log(`Hóa đơn là ${bill3}, tiền boa là ${tip3}, tổng tiền là ${bill3 + tip3}`);