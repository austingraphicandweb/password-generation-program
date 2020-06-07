// Assignment Code - the hash tag means that it is selecting an id. ** I think that I can use this to target the button element inside of the html document.
var generateBtn = document.querySelector("#generate");{

}

// button click event with prompt and confirm customize options
// .onClick - prompt length - confirm lowercase - confirm uppercase - confirm numbers - confirm special characters
function customizer() {
  prompt("Length of password?");
  confirm("Uppercase?");
  confirm("Lowercase?");
  confirm("Numbers?");
  confirm("Special Characters?");
  }

// // random number generation testing
// function randomNumber(max){
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   return Math.floor(Math.random() * Math.floor(max));
// }
// console.log(randomNumber());

//variables for custom password specs 
function passwordLength(){
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "[", "]", "{", "}", "/",];
}

// I am going to create a function to store the choices made about what the user wants the password to be. One option is the use a conditional statement. 

//conditional statement for lowerCase
function passwordGenerator(){
  if (lowerCase === true || upperCase === true || numbers === true || specialCharacters === true){

}else {

}
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
