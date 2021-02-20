// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //when button is clicked, prompts come up
  //password criteria are shown in prompts
  //length prompt 8 chars to 128 chars
  var passLength = window.prompt('How many characters should the password be?\nMin = 8\nMax = 128');
 console.log(passLength);
  //input validated for empty string, only numbers and length
  // Conditional Recursive Function Call
  if (passLength === "") {
    window.alert("Answer cannot be blank! Please try again.");
    return generatePassword();
  } else if (passLength === null) {
    return "Your Secure Password";
  } else if (!Number(passLength)) {
    window.alert("Please enter a number! Please try again.");
    return generatePassword();
  } else if ( passLength < 8 || passLength > 128) {
    window.alert("Password must be between 8 and 128 characters! Please try again.");
    return generatePassword();
  }
  
  //prompt for char types: lowercase, uppercase, numeric, and/or special characters
  var passLower = window.confirm('Would you like to include lowercase letters?');
  var strLower = 'abcdefghijklmnopqrstuvwxyz'; 
  var passUpper = window.confirm('Would you like to include uppercase letters?');
  var strUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
  var passNumb = window.confirm('Would you like to include numbers?');
  var strNumb = '0123456789'; 
  var passSpec = window.confirm('Would you like to include special letters?');
  var strSpec = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //check to see if at least one type selected
  if(!(passLower || passUpper || passNumb || passSpec)) {
    window.alert("Must choose at least one type! Please try again.");
  }

  var strPass = '';
  //add chosen type character set to total chararacters for password generation
  if (passLower) {
    strPass += strLower;
  }
  if (passUpper) {
    strPass += strUpper;
  }
  if (passNumb) {
    strPass += strNumb;
  }
  if (passSpec) {
    strPass += strSpec;
  }

  var pass = ''; 
  //Add random characters from chosen set of characters to each array element based on chosen length
  for (i = 1; i <= passLength; i++) { 
      var char = Math.floor(Math.random() * strPass.length + 1);
      pass += strPass.charAt(char);
  }
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);