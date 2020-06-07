// Assignment Code
var generateBtn = document.querySelector("#generate");

// button click event with prompt and confirm customize options
// .onClick - prompt length - confirm lowercase - confirm uppercase - confirm numbers - confirm special characters
function customizer() {
  prompt("Length of password?");
  confirm("Uppercase?");
  confirm("Lowercase?");
  confirm("Numbers?");
  confirm("Special Characters?");
  }

  //variables for custom password specs
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "[", "]", "{", "}", "/",];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
