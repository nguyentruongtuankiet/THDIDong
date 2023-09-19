

let Dolhins1 = [44, 23, 71];
let Dolhins2 = [85, 54, 41];

let Koa1 = [65, 54, 49];
let Koa2 = [23, 34, 27];

let calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolhins1 = calcAverage(Dolhins1[0], Dolhins1[1], Dolhins1[2]);
let avgDolhins2 = calcAverage(Dolhins2[0], Dolhins2[1], Dolhins2[2]);

let avgKoa1 = calcAverage(Koa1[0], Koa1[1], Koa1[2]);
let avgKoa2 = calcAverage(Koa2[0], Koa2[1], Koa2[2]);

let checkWinner = (avgDolhins, avgKoa) => {
    if (avgDolhins >= avgKoa * 2) {
        console.log(`Dolhins thắng (${avgDolhins} vs ${avgKoa})`);
    } else if (avgKoa >= avgDolhins * 2) {
        console.log(`Koala thắng (${avgKoa} vs ${avgDolhins})`);
    } else {
        console.log("Không đội nào thắng");
    }
}

console.log("Data 1");
checkWinner(avgDolhins1, avgKoa1);
console.log("Data 2");
checkWinner(avgDolhins2, avgKoa2);
