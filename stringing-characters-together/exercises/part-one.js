let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
num = String(num); 
console.log(typeof num); // just for our sake
console.log(num.length); 

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let numDec = 1.1098
numDec = String(numDec);
console.log(numDec.length);
let numDigits = numDec.length-1;
console.log(numDigits);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.


if (num.includes(".")) {
    console.log(num.length-1); 
       }   else {
        console.log(num.length);
       }
    


