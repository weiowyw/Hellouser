
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
// let number1 = prompt('Enter first number');
// let number2 = prompt('Enter second number');
// if (number1 > number2){
//     console.log('First number has higher value');
// }else {
//     console.log('Second number has higher value');
// }

//2.
// let number1 = prompt('Enter the distance in meters');
// let number2 = prompt('Enter the distance in feet');
// if ((number1*0.305)>number2){
//     console.log('M distance is bigger');
// }else{
//     console.log('Ft distance is bigger');
// }

//3.
// let number1 = prompt('Enter first number');
// let number2 = prompt('Enter second number');
// if (number1 % number2 === 0){
//     console.log('First number is a divider of the second one');
// }else if (number2 % number1 === 0){
//     console.log('Second number is a divider of the first one');
// }else{
//     console.log("You can't divide these two numbers");
// }

//4.
// let number = prompt('Enter your number');
// let lastDigit = number % 10;
// if(lastDigit % 2 === 0){
//     console.log('The last digit is even');
//     console.log("And the digit is ", lastDigit);
// } else{
//     console.log('The last digit is odd');
//     console.log("And the digit is ", lastDigit);
// }

//5.
// let number = prompt('Enter a 2-digit number');
// let digit1 = number / 10;
// digit1 = parseInt(digit1);
// let digit2 = number % 10;
// if (digit2 > digit1){
//     console.log('Second digit has higher value than first');
// }else{
//     console.log('First digit has higher value than second');
// }

// 6.
// let number = prompt('Enter a 3-digit number');
// let digit1 = number / 100;
// digit1 = parseInt(digit1);
// let digit2 = (number / 10) % 10;
// digit2 = parseInt(digit2);
// let digit3 = number % 10;
// let sum = digit1 + digit2 + digit3;
// let product = digit1 * digit2 * digit3;
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
// let number = prompt('Enter a 3-digit number');
// let digit1 = number / 100;
// digit1 = parseInt(digit1);
// let digit2 = (number / 10) % 10;
// digit2 = parseInt(digit2);
// let digit3 = number % 10;
// console.log(digit1, digit2, digit3);
// if(digit1===digit2 && digit1===digit3){
//     console.log('Every digit is equal')
// }else if(digit1===digit2 || digit1===digit3 || digit2===digit3){
//     console.log('Some of these 3 digits are equal');
// }else{
//     console.log('None of these digits are equal')
// }

//8.
// let number = prompt('Enter a 6-digit number');
// let digit1 = number / 100000;
// digit1 = parseInt(digit1);
// let digit2 = (number / 10000) % 10;
// digit2 = parseInt(digit2);
// let digit3 = (number / 1000) % 10;
// digit3 = parseInt(digit3);
// let digit4 = (number / 100) % 10;
// digit4 = parseInt(digit4);
// let digit5 = (number / 10) % 10;
// digit5 = parseInt(digit5);
// let digit6 = number % 10;
// digit6 = parseInt(digit6);
// console.log(digit1, digit2, digit3, digit4, digit5, digit6);
// if(digit1===digit6 && digit2===digit5 && digit3===digit4){
//     console.log('The number is mirrored');
// }else{
//     console.log('The number is not mirrored');
// }