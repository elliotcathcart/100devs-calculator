const nine = document.querySelector('#nine');
const eight = document.querySelector('#eight');
const seven = document.querySelector('#seven');
const six = document.querySelector('#six');
const five = document.querySelector('#five');
const four = document.querySelector('#four');
const three = document.querySelector('#three');
const two = document.querySelector('#two');
const one = document.querySelector('#one');
const zero = document.querySelector('#zero');

const multiply = document.querySelector('#multiply');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const equals = document.querySelector('#equals');
const dot = document.querySelector('#dot');
const divide = document.querySelector('#divide');
const reset = document.querySelector('#reset');

let output = document.querySelector('#output');

let input = '';

let calculator = new Calculator();

nine.addEventListener('click', function(){
    input += '9';
    output.innerHTML += '9';
});

eight.addEventListener('click', function(){
    input += '8';
    output.innerHTML += '8';
});

seven.addEventListener('click', function(){
    input += '7';
    output.innerHTML += '7';
});

six.addEventListener('click', function(){
    input += '6';
    output.innerHTML += '6';
});

five.addEventListener('click', function(){
    input += '5';
    output.innerHTML += '5';
});

four.addEventListener('click', function(){
    input += '4';
    output.innerHTML += '4';
});

three.addEventListener('click', function(){
    input += '3';
    output.innerHTML += '3';
});

two.addEventListener('click', function(){
    input += '2';
    output.innerHTML += '2';
});

one.addEventListener('click', function(){
    input += '1';
    output.innerHTML += '1';
});

zero.addEventListener('click', function(){
    input += '0';
    output.innerHTML += '0';
});

multiply.addEventListener('click', function() {
    input += '*';
    output.innerHTML += 'x';
});

plus.addEventListener('click', function() {
    input += '+';
    output.innerHTML += '+';
});

minus.addEventListener('click', function() {
    input += '-';
    output.innerHTML += '-';
});

dot.addEventListener('click', function() {
    input += '.';
    output.innerHTML += '.';
});

divide.addEventListener('click', function() {
    input += '/';
    output.innerHTML += '/';
});

equals.addEventListener('click', function() {
    let result = calculator.compute(input);
    output.innerHTML = result;
    input = result;
});

reset.addEventListener('click', function() {
    input = 0;
    output.innerHTML = 0;
})