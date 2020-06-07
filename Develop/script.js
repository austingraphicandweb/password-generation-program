// .onClick - prompt length - confirm lowercase - confirm uppercase - confirm numbers - confirm special characters
// use Crypto.getRandomValues()
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "[", "]", "{", "}", "/",]

  passwordText.value = password;

}

// prompt and confirm password specifications
confirm("Uppercase?");
confirm("Lowercase?");
confirm("Numbers?");
confirm("Special Characters?");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
