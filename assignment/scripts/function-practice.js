console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name + '!';
}
console.log(helloName('John'));
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  let thirdNumber = (firstNumber + secondNumber);
  return thirdNumber;

  // return firstNumber + secondNumber;
}
console.log('Sum is', addNumbers(2, 7));


// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  let num4 = (num1 * num2 * num3);
  return num4;
}
console.log('Total is: ', multiplyThree(3,5,2));
console.log('Total is: ', multiplyThree(17,1,1));
console.log('Total is: ', multiplyThree(31,5,22));
console.log('Total is: ', multiplyThree(13,4,9));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(317) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-38) );
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say true', isPositive(2) );
console.log( 'isPositive - should say false', isPositive(-8) );

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.


function getLast( beerList ) {   
  beerList = [ 'pale ale', 'maibock', 'vienna lager', 'hefeweizen', ];
  return (beerList.pop ());
}
console.log (getLast());

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
treasureArray=[13, 42, 97, 17, 134];
console.log('Testing array. Should be: [13, 42, 97, 17, 134]');

function find( value, treasureArray ){
  for (let i=0; i <= treasureArray.length; i++){
    if (treasureArray[i]===value){
      return true
    } 
  }
  return false
}
console.log(find(13,treasureArray));
console.log(find(23,treasureArray));
console.log(find(42,treasureArray));
console.log(find(16,treasureArray));
console.log(find(0,treasureArray));
console.log(find(-6,treasureArray));
console.log(find(134,treasureArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.charAt(0))
    return true
  else
    return false

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!