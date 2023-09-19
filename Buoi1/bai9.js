
let printForecast = (arr) => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(str);
}

console.log("---- FORECAST 1 ----");
printForecast([17, 21, 23]);
console.log("---- FORECAST 2 ----");
printForecast([12, 5, -5, 0, 4]);