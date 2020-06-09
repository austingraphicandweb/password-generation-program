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
    if (confirmLowerCase){
        userChoice = userChoice.concat(lowerCase && upperCase && numbers && specialCharacters);
    } else if (confirmUpperCase) {
        userChoice = userChoice.concat(upperCase && lowerCase && numbers && specialCharacters);
    } else if (confirmNumbers) {
        userChoice = userChoice.concat(numbers && lowerCase && upperCase && specialCharacters);
    } else if (confirmSpecialChar) {
        userChoice = userChoice.concat(specialCharacters && numbers && lowerCase && upperCase);
    } else if (confirmLowerCase === false || confirmUpperCase === false || confirmNumbers === false || confirmSpecialChar === false){
        alert("Please choose valid options.");
        return pickPass();
    }

  // At this stage I am going to write a for loop that generates the random password.
  var password = "";
  for (i = 0; i < passwordLength; i++) {
      var randomizer = Math.floor(Math.random()*userChoice.length);
      console.log(randomizer);
      password += userChoice[randomizer];
  }
  console.log(password);

}
  // Add event listener, which is a method of javascript, to generate button
  generateBtn.addEventListener("click", pickPass);