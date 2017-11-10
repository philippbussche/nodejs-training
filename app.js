// function statement
function greet() {
    console.log('Hi');
}
greet();

function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function() {
    console.log('Hi Philipp');
}
greetMe();
logGreeting(greetMe);

// use a function on the fly
logGreeting(function() {
    console.log('Hello Philipp');
})

// using a module
var greetFromModule = require('./greet.js');
greetFromModule();
