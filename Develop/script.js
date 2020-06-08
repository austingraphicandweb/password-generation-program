  // a for loop that can be used to prompt and confirm the users choices. Also working as a click event with button.
  function customizer() {
   var passLength = prompt("Length of password?");
   var confirmUpperCase = confirm("Uppercase?");
   // add variables 
   var confirmLowerCase = confirm("Lowercase?");
    var confirmNumbers = confirm("Numbers?");
    var confirmSpecialChar = confirm("Special Characters?");
    // console.log(confirmUppercase);
    var obj = {
        passLength: passLength,
        confirmUpperCase: confirmUpperCase,
        confirmLowerCase: confirmLowerCase,
        confirmNumbers: confirmNumbers,
        confirmSpecialChar: confirmSpecialChar,
    }
    passwordGenerator(obj);

    }
  // for(i=0;i<customizer.length;i++){
  //   customizer(i);
  // }
  // console.log(customizer());


  //the password generator is supposed to take upper, lower, numbers, and specialCharacters as well as the conditional statement and a for loop to make the overall password generator that works when someone clicks on the big red button.
function passwordGenerator(penMan){
  console.log(penMan);
  // variables
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "`", "[", "]", "{", "}", "/",];
  // conditional statements checking certain parts of my prompt
  if (penMan.confirmUpperCase){
   var confirmUpper = upperCase[Math.floor(Math.random() * upperCase.length)];
   console.log(confirmUpper);
  } else if (lowerCase){
   
  } else if (numbers){
    
  } else if (specialCharacters){
   
  } else {
    alert('please try your inputs again.');
  }

}

  // alert(passwordGenerator());


  // this conditional statement is supposed to represent the user picking a number between 8 and 128 characters long and will need to be tied to function customizer somehow.
  // if (prompt >= 8 || prompt <= 128) {
  //   alert(math.floor(math.random * math.floor()));
  // } else {
  //   alert("Please revise the length of your password.");
  // }

  // I am going to create a function to store the choices made about what the user wants the password to be. One option is the use a conditional statement.
  // Assignment Code - the hash tag means that it is selecting an id. ** I think that I can use this to target the button element inside of the html document.
  var generateBtn = document.querySelector("#generate");{

  }

// Write password to the #password input. As a side note, functions are good for storage of other information.
 function password(password) {
   var password = password;
   var passwordText = document.querySelector("#password"); //DOM traversing. selecting the id of password from the html document.

   passwordText.value = password;

 }

// Add event listener, which is a method of javascript, to generate button
 generateBtn.addEventListener("click", customizer);
