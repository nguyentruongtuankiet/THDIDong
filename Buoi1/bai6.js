
let calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let bill = [125, 555, 44];

let tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

let total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];

console.log("Mảng Bill: ", bill);
console.log("Mảng Tip: ", tip);
console.log("Mảng Total: ", total);