const myModule = require("./customModule");
const customerClass = require("./customModule").consumer;

myModule.isFactorial(5);

const cust = new customerClass("Mahesh", "Banglore");
cust.consumerDetails();
