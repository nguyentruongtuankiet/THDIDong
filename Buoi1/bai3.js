
let Dolphins1 = [96, 108, 89];
let Dolphins2 = [97, 112, 101];
let Dolphins3 = [97, 112, 101];

let Koalas1 = [88, 91, 110];
let Koalas2 = [109, 95, 123];
let Koalas3 = [109, 95, 106];

let averageDolphins1 = (Dolphins1[0] + Dolphins1[1] + Dolphins1[2]) / 3;
let averageDolphins2 = (Dolphins2[0] + Dolphins2[1] + Dolphins2[2]) / 3;
let averageDolphins3 = (Dolphins3[0] + Dolphins3[1] + Dolphins3[2]) / 3;

let averageKoalas1 = (Koalas1[0] + Koalas1[1] + Koalas1[2]) / 3;
let averageKoalas2 = (Koalas2[0] + Koalas2[1] + Koalas2[2]) / 3;
let averageKoalas3 = (Koalas3[0] + Koalas3[1] + Koalas3[2]) / 3;


console.log("Trung bình lần 1 Dolphins :" + averageDolphins1);
console.log("Trung bình lần 2 Dolphins :" + averageDolphins2);
console.log("Trung bình lần 3 Dolphins :" + averageDolphins3);

console.log("Trung bình lần 1 Koalas :"+averageKoalas1);
console.log("Trung bình lần 2 Koalas :"+averageKoalas2);
console.log("Trung bình lần 3 Koalas :"+averageKoalas3);
console.log("So sánh");
if(averageDolphins1>averageKoalas1){
    console.log("Dolphins thắng");
} else if(averageDolphins1<averageKoalas1){
    console.log("Koalas thắng");
} else{
    console.log("Cả 2 đội hòa nhau");
}

console.log("lần 2");
if ((averageDolphins2 == averageKoalas2) && (averageDolphins2 >= 100)) {
    console.log("Cả 2 đội hòa nhau");
} else if ((averageDolphins2 > averageKoalas2) && (averageDolphins2 >= 100)) {
    console.log("Dolphins thắng");
} else if ((averageDolphins2 < averageKoalas2) && (averageKoalas2 >= 100)) {
    console.log("Koalas thắng");
} else {
    console.log("Không có đội nào thắng");
}

console.log("lần 3");
if ((averageDolphins3 == averageKoalas3) && (averageDolphins3 >= 100)) {
    console.log("Cả 2 đội hòa nhau");
}
else if ((averageDolphins3 > averageKoalas3) && (averageDolphins3 >= 100)) {
    console.log("Dolphins thắng");
}
else if ((averageDolphins3 < averageKoalas3) && (averageKoalas3 >= 100)) {
    console.log("Koalas thắng");
}
else {
    console.log("Không có đội nào thắng");
}

if (averageDolphins1 > averageKoalas1 && averageDolphins1 > averageKoalas2 && averageDolphins1 > averageKoalas3) {
    console.log("Dolphins giành cúp");
} else if (averageDolphins2 > averageKoalas1 && averageDolphins2 > averageKoalas2 && averageDolphins2 > averageKoalas3) {
    console.log("Dolphins giành cúp");
} else if (averageDolphins3 > averageKoalas1 && averageDolphins3 > averageKoalas3 && averageDolphins2 > averageKoalas3) {
    console.log("Dolphins giành cúp");
} else {
    console.log("Koalas giành cúp");
}