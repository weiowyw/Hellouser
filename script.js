
// let name = prompt('Enter your name:');
//
// alert('Hello, '  + name + '! How are you?');
//
// let number1 = prompt('Enter first number:');
// let number2 = prompt('Enter second number:');
// number1=parseInt(number1);
// number2=parseInt(number2);
//
// alert('Sum of your 2 numbers is ' + (number1 + number2));
// alert('Difference of your 2 numbers is ' + (number1 - number2));
// alert('Product of your 2 numbers is ' + (number1 * number2));
// alert('Quotient of your 2 numbers is ' + (number1 / number2));
//
//
// let number11 = prompt('Enter first number:');
// let number12 = prompt('Enter second number:');
// let number13 = prompt('Enter third number:');
//
// number11=parseInt(number11);
// number12=parseInt(number12);
// number13=parseInt(number13);
// alert('Arithmetic mean of these 3 numbers is ' +((number11+number12+number13)/3));


//1.
// let a = prompt('Enter first number');
// let b = prompt('Enter second number');
// if (a > b){
//     console.log('A has higher value');
// }else {
//     console.log('B has higher value');
// }

//2.
// let a = prompt('Enter first number');
// let b = prompt('Enter second number');
// if ((a*0.305)>b){
//     console.log('A is bigger');
// }else{
//     console.log('B is bigger');
// }

//3.
// let a = prompt('Enter first number');
// let b = prompt('Enter second number');
// if (a % b === 0){
//     console.log('A is a divider of B');
// }else if (b % a === 0){
//     console.log('B is a divider of A');
// }else{
//     console.log("You can't divide these two numbers");
// }

//4.
// let a = prompt('Enter your number');
// let b = a % 10;
// if(b % 2 === 0){
//     console.log('The digit is even');
//     console.log("And the digit is ", b);
// } else{
//     console.log('The digit is odd');
//     console.log("And the digit is ", b);
// }

//5.
// let a = prompt('Enter a 2-digit number');
// let b = a % 10;
// let c = a / 10;
// c = parseInt(c);
// if (b > c){
//     console.log('Second digit has higher value than first');
// }else{
//     console.log('First digit has higher value than second');
// }

//6.
// let a = prompt('Enter a 3-digit number');
// let b = a / 100;
// b = parseInt(b);
// let c = (a / 10) % 10;
// c = parseInt(c);
// let d = a % 10;
// let sum = b + c + d;
// let product = b * c * d;
// if(sum % 2 === 0){
//     console.log('The sum of these digits is even');
// }else{
//     console.log('The sum of these digits is odd');
// }
// if(sum % 5 === 0){
//     console.log('The sum can be divided by 5');
// }else{
//     console.log('The sum cannot be divided by 5');
// }
// if(product > 100){
//     console.log('The product is higher than 100');
// }else{
//     console.log('The product is not higher than 100');
// }

//7.
// let a = prompt('Enter a 3-digit number');
// let b = a / 100;
// b = parseInt(b);
// let c = (a / 10) % 10;
// c = parseInt(c);
// let d = a % 10;
// console.log(b, c, d);
// if(b===c && b===d){
//     console.log('Every digit is equal')
// }else if(b===c || b===d || c===d){
//     console.log('Some of these 3 digits are equal');
// }else{
//     console.log('None of these digits are equal')
// }

//8.
let a = prompt('Enter a 6-digit number');
let b = a / 100000;
b = parseInt(b);
let c = (a / 10000) % 10;
c = parseInt(c);
let d = (a / 1000) % 10;
d = parseInt(d);
let e = (a / 100) % 10;
e = parseInt(e);
let f = (a / 10) % 10;
f = parseInt(f);
let g = a % 10;
g = parseInt(g);
console.log(b, c, d, e, f, g);
if(b===g && c===f && d===e){
    console.log('The number is mirrored');
}else{
    console.log('The number is not mirrored');
}