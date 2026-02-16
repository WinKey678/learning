// i'm learning about variables in JS here

let placeholder = 'Hello World!';
console.log(placeholder);

// you can't used a reserved keyword for the name
// so you can't do let var = 'lorem ipsum'; because var is a reserved keyword

// you can't start a variable name with a number
// so you can't do let 1stName = 'John'; because it starts with a number

// you can't have spaces or hyphens in a variable name
// so you can't do let first-name = 'John'; because it has a hyphen
// or let first name = 'John'; because it has a space

// names should be meaningful and descriptive
// so you should do let firstName = 'John'; because it is meaningful and descriptive

var secondPlaceholder = 'lorem ipsum';
// avoid using var because it is function-scoped and can cause bugs
// use let or const instead (block-scoped)

let placeholderName = 'John Doe';
// it's a good idea to use camelCase for variable names

const PI = 3.14;
// use const if it'll never change, otherwise use let

// so overall

// use let for variables that'll change
// use const for variables that'll never change
// and avoid var as a whole
// also name your variables meaningfully and descriptively, and use camelCase for variable names

// something worth knowing

const x = 5;
//         ^
// a semicolon (;) terminates the statement

// but, in a lot of cases JS will insert semicolons for you
// even so, it's safer to always include them,
// because omitting them can sometimes lead to unexpected behavior

// another thing worth knowing
// you can declare multiple variables in one line
let a = 1, b = 2, c = 3;
// although it's cleaner to declare each variable on a separate line, especially if they have different types or purposes

// one last thing
// you should know the difference between camelCase and PascalCase
// camelCase: firstName, lastName, myVariable
// PascalCase: FirstName, LastName, MyVariable
// in JS, you usually use camelCase for variable names and PascalCase for class names
