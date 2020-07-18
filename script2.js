var product=prompt("Please enter product name:");
var quantity=prompt("How many do you want?");
var price=prompt("How much do you want to pay?");
alert("There will be a 16% tax applied.");

console.log(Number(quantity));
console.log("You've chosen " + quantity + " item(s)");

console.log(Number(price));
console.log("Price per item: " + price);

const tax=`1.16`;
console.log("Tax rate is 16% " + tax);

subtotal = quantity * price;
Math.round(subtotal);
console.log("Your subtotal is " + subtotal);

total = quantity * price * tax;

msg = "Total price today for a " + product + " is " + Math.round(total);
console.log(msg);
