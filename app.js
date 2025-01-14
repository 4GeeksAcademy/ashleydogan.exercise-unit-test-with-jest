
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)

// We declare the function with the exact name "fromEuroToDollar"


// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

console.log(fromEuroToDollar(3.5));

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to Yen
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    // return the yen value
    return valueInYen;
}

console.log(fromDollarToYen(3.5));

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to pound
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    // return the pound value
    return valueInPound;
}

console.log(fromYenToPound(3.5));
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

