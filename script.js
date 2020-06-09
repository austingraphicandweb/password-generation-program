// Assignment Code
var generateBtn = document.querySelector("#generate");

// determining the length of the passcode
function pickPass() {
    var passwordLength = prompt("Pick your password length");
    if (passwordLength < 8 || passwordLength > 128){
        alert("Try again.");
        return pickPass();
    } else if (isNaN(passwordLength)){
        alert("Not a number. Try again.");
        return pickPass();
    }
}
  console.log(passwordLength);

// Variables used to confirm information and store the different options available for the user when picking a password.
  var confirmUpperCase = confirm("Uppercase?");
  var confirmLowerCase = confirm("Lowercase?");
  var confirmNumbers = confirm("Numbers?");
  var confirmSpecialChar = confirm("Special Characters?");

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "[", "]", "{", "}", "/",];

// variable defining the choice of the user
  var userChoice = [];
// A group of if then statements that determines the users choice.
  if (lowerCase){
      userChoice = userChoice.concat(lowerCase);
  } else if (upperCase) {
      userChoice = userChoice.concat(upperCase);
  } else if (numbers) {
      userChoice = userChoice.concat(upperCase);
  } else if (specialCharacters) {
      userChoice = userChoice.concat(specialCharacters);
  } else if (lowerCase === false || upperCase === false || numbers === false || specialCharacters === false){
      alert("Please choose valid options.");
  }
  console.log(userChoice);

// At this stage I am going to write a for loop that generates the random password.
var password = "";
for (i = 0; i < passwordLength; i++) {
    var randomizer = math.floor(math.random()*userChoice.length);
    console.log(randomizer);
    password += userChoice[randomizer];
}
console.log(password);
// Add event listener, which is a method of javascript, to generate button
  generateBtn.addEventListener("click", password);
