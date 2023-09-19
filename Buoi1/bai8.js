let bill = [22 , 295 , 176 , 440 , 37 , 105 , 10 , 1100 , 86 , 52];

let tip = [];
let total = [];

let calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

for (let i = 0; i < bill.length; i++) {
    tip.push(calcTip(bill[i]));
    total.push(bill[i] + tip[i]);
}

console.log("Mảng Bill: ", bill);
console.log("Mảng Tip: ", tip);
console.log("Mảng Total: ", total);