// Assignment Code
var generateBtn = document.querySelector("#generate");

//Get user password length

// Write password to the #password input
function writePassword() {
  var passlength = prompt("Enter password length between 8 and 128 characters.");
  var passlow = confirm("Would you like lower case characters to be included?");
  var passcap = confirm("Would you like captial letters to be included?");
  var passnum = confirm("Would you like numeric characters to be included?");
  var passspec = confirm("Would you like special characters to be included?");
  var password = generatePassword(){
    
  };
  
  
  
  
  
  
  
  
  
  
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
