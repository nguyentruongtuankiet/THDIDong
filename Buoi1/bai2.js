
// khai báo biến chiều cao cho Mark và John của 2 data
let higherMark1 = 1.69;
let higherMark2 = 1.88;
let higherJohn1 = 1.95;
let higherJohn2 = 1.76;
// khai báo biến khối lượng cho Mark và John của 2 data
let massMark1 = 78;
let massMark2 = 95;
let massJohn1 = 92;
let massJohn2 = 85;

// cách 1
let bmiMark11 = massMark1 / (higherMark1 * higherMark1);
let bmiMark21 = massMark2 / (higherMark2 * higherMark2);
let bmiJohn11 = massJohn1 / (higherJohn1 * higherJohn1);
let bmiJohn21 = massJohn2 / (higherJohn2 * higherJohn2);
// cách 2

let bmiMark12 = massMark1 / (higherMark1 ** 2);
let bmiMark22 = massMark2 / (higherMark2 ** 2);
let bmiJohn12 = massJohn1 / (higherJohn1 ** 2);
let bmiJohn22 = massJohn2 / (higherJohn2 ** 2);

//
let markHigherBMI1 = bmiMark11 > bmiJohn11;
let markHigherBMI2 = bmiMark21 > bmiJohn21;

if (markHigherBMI1) {
    console.log("Chỉ số BMI(" + Math.floor(bmiMark11) + ") của Mark cao hơn John(" + Math.floor(bmiJohn11) + ") ");
}
if (markHigherBMI2) {
    console.log("Chỉ số BMI(" + Math.floor(bmiMark21) + ") của Mark cao hơn John(" + Math.floor(bmiJohn21) + ") ");
}

