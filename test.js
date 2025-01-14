// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("euro to dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("dollars to yen", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const valueInDollar = 3.5;
    
    const expectedYen = 3.5 / 1.07 * 156.5; 
    
    const result = fromDollarToYen(valueInDollar);
    // This is the comparison for the unit test
     expect(result).toBeCloseTo(expectedYen,1); // 

     
})


test("yen to pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const valueInYen = 3.5;
    
    const expectedPounds = 3.5 / 156.5 * .87; 
    
    const result = fromYenToPound(valueInYen);
    // This is the comparison for the unit test
     expect(result).toBeCloseTo(expectedPounds,1); // 

     
})