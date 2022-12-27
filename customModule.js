module.exports.msgFun = (name) => console.log(`Hi!!...${name} `);

module.exports.isFactorial = function (number) {
  let fact = 1;
  for (let i = 2; i <= number; i++) {
    fact = fact * i;
  }
  console.log(fact);
};

module.exports.isReverse = function (number) {
  let rev = 0;
  while (number != 0) {
    let digit = number % 10;
    rev = rev * 10 + digit;
    number = number / 10;
  }

  console.log(`Original Number is ${number} Reversed is ${rev}`);
};

module.exports.consumer = class {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  consumerDetails() {
    console.log(`name is: ${this.name} +"<br>"+ Address is: ${this.location}`);
  }
};
