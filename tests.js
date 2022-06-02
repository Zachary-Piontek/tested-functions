// IMPORT MODULES under test here:
import {
    add, 
    subtract,
    multiply,
    triangleArea,
    greater100,
} from './functions.js';

const test = QUnit.test;

/*

    Write a function that takes in two numbers and
    returns their sum (add)

    2, 5 --> 7

    Uses: Math operator

*/

test('demo: adds two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // Inputs and outputs
    const x = 2;
    const y = 5;
    const expected = 7;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
/*

Write a function that takes in two numbers and returns their 
    difference (subtract) 
    9 - 3 = 6

*/

test('subtract two numbers', (expect) => {
    // Arrange
    const x = 9;
    const y = 3;
    const expected = 6;

    // Act
    const actual = subtract(x, y);

    // Expect
    expect.equal(actual, expected);
});

/* 
    Write a function that takes in number of minutes
    and returns the number of seconds

    10 --> 600

    Uses: Math operator(s)
*/

test('return number of seconds', (expect) => {
    // Arrange
    const x = 10;
    const y = 60;
    const expected = 600;

    // Act 
    const actual = multiply(x, y);

    // Expect
    expect.equal(actual, expected);
});



/* 
    Write a function that takes in the base and height
    of a triangle and returns its area

    5, 10 --> 25

    Uses: Math operator(s)
*/

test('area of triangle', (expect) => {
    const x = 5;
    const y = 10;
    const z = 0.5;
    const expected = 25;

    // Act
    const actual = triangleArea(x, y, z);

    // Expect
    expect.equal(actual, expected);
});

/* 
    Write a function that takes in two 2 numbers
    and returns true if their sum is less than 100 or 
    false if it is greater than 100

    25, 13 --> true
    88, 60 --> false

    Uses: Comparison operator(s), if/else control flow
*/

test('greater than 100', (expect) => {
    const x = 88;
    const y = 60;
    const expected = false;

    const actual = greater100(x, y);

    expect.equal(actual, expected);
});

test('less than 100', (expect) => {
    const x = 25;
    const y = 13;
    const expected = true;

    const actual = greater100(x, y);

    expect.equal(actual, expected);
});

/* 
    Write a function that takes a number and
    and returns 'even' if number is even, otherwise 'odd'.

    3 --> 'odd'
    6 --> 'even'

    Uses: modulo operator, comparison operator, if/else control flow
*/



/* 
    Write a function that takes in a first, last, and a third optional
    middle name parameter and returns a correctly formatted name

    'Ruth', 'Ginsburg' --> 'Ruth Ginsburg'
    'Ruth', 'Ginsburg', 'Bader' --> 'Ruth Bader Ginsburg'

    Uses: let variable with reassignment, string concatenation, 
    existence comparison operator, if control flow
*/

/* 
    Write a function that takes a name, type, age, and food
    and returns an object like:

    {
        name: 'felix',
        type: 'cat',
        age: 6,
        food: 'tuna'
    }

    Uses: object literal syntax
*/

/*
    Write a function that takes a number
    and returns the total of all counting numbers from 1 to the supplied number

    4 --> 10 (1 + 2 + 3 + 4)

    Uses: let variable with reassignment, math operator, for...i loop
*/

/*
    Write a function that takes name of three pets
    and returns an array of those names

    'felix', 'fido', 'alex' --> ['felix', 'fido', 'alex']

    Uses: array literal syntax
*/

/*
    Write a function that takes an array of pet types ('cat', 'dog', 'bird')
    and returns the count of cats

    ['cat', 'dog', 'bird', 'cat', 'cat'] --> 3

    Uses: let variable with reassignment, math operator, for...of loop
*/

/*
    Write a function takes in a month as input (represented as a 
    number between 1 and 12) and returns the number of days in that month. 
    For now, assume there are always 28 days in Feb.
    
    1 --> 31
    2 --> 28
    4 --> 30

    Uses: if/else control flow

    Bonus 1: Check the value of the number passed into the function and
    print a message to the user if the value is not between 1 and 12
    
    Bonus 2: Update the function to accept an optional parameter year
    that checks if the year is a leap year, and returns the correct
    number of days for Feb. The default value for the year should be
    the current year
*/
