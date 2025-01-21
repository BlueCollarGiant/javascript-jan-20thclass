/*console.log(true);
console.log(false);

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));*/

/*let age;

if (age >= 18) {
    console.log (" you are eligible to vote")
} else {
    console.log("your to young")
}*/

/*let isThursday= false;

let isPayday = false;

if (isThursday|| isPayday){
    console.log("Time for class");
} else {
    console.log("woot payday");
}*/

/* jan 20th classwork */

/*function istruthorFalse (test) {

console.log(Boolean(test))

}

istruthorFalse(0)
istruthorFalse("")
istruthorFalse("hello")
istruthorFalse(42)
istruthorFalse(null)

truthy falsy test complete */

/*
let age = 25

if (age >= 18){
    console.log("you are eligible to vote");

} else {
    console.log("Your to young to vote");
}

age eligibility complete */

/* calculate final price
const startprice = 150;
const discount = 0.20;
const taxRate = 0.08;

const discountedPrice = startprice - (startprice * discount);
const finalPrice = discountedPrice + (discountedPrice * taxRate)

console.log(`Original Price: $${startprice}`)
console.log(`Discount: ${(discount * 100)}%`)
console.log(`Tax: ${(taxRate * 100)}%`)
console.log(`Final Price: $${finalPrice}`)
calculate final price finished */

/* nested if statements for login*/
/*
const username = "admin"
const password = "password123"

if (username === "admin"){
    if (password === "password123") {
        console.log("Access granted")
    } else {
        console.log("Incorrect Password")
    }
} else {
    console.log("Unknown user")
}*/
/* nested if statements for login complete */
/* driving eligibility */
/*
let age = 25;
let hasLicense = true;
if (age >= 18) {
    if (hasLicense === true) {
        console.log("You can drive");
    } else {
        console.log("You need a license to drive");
    }
} else {
    console.log("You are not old enough to drive");
}
*/
/* finished driving eligibility*/
/* logical Operators practice */
/*
let isWeekend= false;

let isPayday = false;

if (isThursday|| isHoliday){
    console.log("You can relax today");
} else {
    console.log("its a workday");
}*/
/* end logical operators practice */
/*  start function greeting */
/*function greeting (name) {
    console.log(`Hello, ${name}! Welcome to Javascript class`)
}

greeting("john")
end of function greeting
*/
/* start of function: square a number */
/*function square(num) {
    console.log(num ** 2)
}

square(5);
square(7);
square(10);
*/
/* end of function square a number */
/* function with default parameters start */
/*function calculateDiscount(price, discountRate = 0.1){
    let discount = price * discountRate
    let finalPrice = price - discount
    console.log(`Discount: ${discount}`)
    console.log(`Final Price: ${finalPrice}`)
}

calculateDiscount(100);
calculateDiscount(200, 0.2)*/
/* end of default parameters */
function calculateFinalPrice(price, discountRate = 0.15, taxRate = 0.08) {
    let discount = price * discountRate;
    let discountedPrice = price - discount;
    
    const finalPrice = discountedPrice + (discountedPrice * taxRate)
    
    console.log(`Original Price $${price.toFixed(2)}` );
    console.log(`Discount: $${discount.toFixed(2)} (${(discountRate * 100).toFixed(2)}%)`);
    console.log(`Tax: $${(discountedPrice * taxRate).toFixed(2)} (${(taxRate * 100).toFixed(2)}%)`);
    console.log(`Final Price $${finalPrice.toFixed(2)}`)
}

calculateFinalPrice(100);
calculateFinalPrice(250, 0.2, 0.1)