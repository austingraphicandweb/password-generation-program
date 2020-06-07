// I am going to create a function to store the choices made about what the user wants the password to be. One option is the use a conditional statement.
// Assignment Code - the hash tag means that it is selecting an id. ** I think that I can use this to target the button element inside of the html document.
var generateBtn = document.querySelector("#generate");{

}

// a for loop that can be used to prompt and confirm the users choices. Also working as a click event with button.
  function customizer() {
    prompt("Length of password?");
    confirm("Uppercase?");
    confirm("Lowercase?");
    confirm("Numbers?");
    confirm("Special Characters?");
    }
  for(i=0;i<customizer.length;i++){
    customizer(i);
  }

//the password generator is supposed to take upper, lower, numbers, and specialCharacters as well as the conditional statement and a for loop to make the overall password generator that works when someone clicks on the big red button.
function passwordGenerator(){
  // variables
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "[", "]", "{", "}", "/",];
  // conditional statement
  if (lowerCase === true || upperCase === true || numbers === true || specialCharacters === true){
    alert('you win!');
} else if (lowerCase === false || upperCase === false || numbers === false || specialCharacters === false) {
    alert('you loose...');
}
}

alert(passwordGenerator());
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
