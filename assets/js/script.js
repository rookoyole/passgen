// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//when button is clicked, prompts come up
//password criteria are shown in prompts
//length prompt 8 chars to 128 chars
var passLength = window.prompt('How many characters should the password be?\nMin = 8\nMax = 128');
//input validated for empty string and length
// Conditional Recursive Function Call
  if (passLength === "" || passLength === null) {
    window.alert("Answer cannot be blank! Please try again.");
    return generatePassword();
  } else if ( passLength < 8 || passLength > 128) {
    window.alert("Password must be between 8 and 128 characters! Please try again.");
    return generatePassword();
  }
  
  //prompt for char types: lowercase, uppercase, numeric, and/or special characters
  var passLower = window.confirm('Would you like to include lowercase letters?');
  var passUpper = window.confirm('Would you like to include uppercase letters?');
  var passNumb = window.confirm('Would you like to include numbers?');
  var passSpec = window.confirm('Would you like to include special letters?');

  //check to see if at least one type selected
  if(!(passLower || passUpper || passNumb || passSpec)) {
    window.alert("Must choose at least one type! Please try again.");
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

//after all prompts, write password to page