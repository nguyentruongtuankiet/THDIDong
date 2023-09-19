
let MarkMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

let JohnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}


if (MarkMiller.calcBMI() > JohnSmith.calcBMI()) {
    console.log(`Chỉ số BMI của ${MarkMiller.fullName}(${MarkMiller.calcBMI()}) cao hơn của ${JohnSmith.fullName}(${JohnSmith.calcBMI()})!`);
} else if (JohnSmith.calcBMI() > MarkMiller.calcBMI()) {
    console.log(`Chỉ số BMI của ${JohnSmith.fullName}(${JohnSmith.calcBMI()}) cao hơn của ${MarkMiller.fullName}(${MarkMiller.calcBMI()})!`);
} else {
    console.log(`Chỉ số BMI của ${JohnSmith.fullName}(${JohnSmith.calcBMI()}) bằng của ${MarkMiller.fullName}(${MarkMiller.calcBMI()})!`);
}