// Assignment Code
var generateBtn = document.querySelector("#generate");
var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var number = "1234567890"
var symbol = "!@#$%&*+?="
 
//Get user password length
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var passlength = (prompt("Chose your password length. It must between 8 and 128 characters."));
  var low = confirm("Would you like lower case characters to be included?");
  var cap = confirm("Would you like captial letters to be included?");
  var num = confirm("Would you like numeric characters to be included?");
  var sym = confirm("Would you like special characters to be included?");

 
 
  

  console.log(passlength)
  console.log(low)
  console.log(cap)
  console.log(num)
  console.log(sym)

  
  
 

  var pwd; 
  
  if ( low && cap && num && sym) {
    pwd = captial.concat(lower, number, symbol);
  } 
  else if (low && cap && num) {
    pwd = lower.concat(capital, number)
  }
  else if (low && num && sym) {
    pwd = lower.concat(number, symbol);
  } 
  else if (low && cap && sym) {
    pwd = lower.concat(capital, symbol);  
  }
  else if (cap && num && sym) {
    pwd = capital.concat(number, symbol);
  }
  else if (low && cap) {
    pwd = lower.concat(capital);
  }
  else if (low && num) {
    pwd = lower.concat(number);
  }
  else if (low && sym) {
    pwd = lower.concat(symbol);
  }
  else if (cap && num) {
    pwd = capital.concat(number);
  }
  else if (cap && sym) {
    pwd = capital.concat(symbol);
  } 
  else if (num && sym) {
    pwd = number.concat(symbol);
  }
  else if (low) {
    pwd = lower;
  }
  else if (cap) {
    pwd = capital;
  }
  else if (num) {
    pwd = number;
  }
  else if (sym) {
    pwd = symbol;
  }
  else prompt("Please enter a value!")





  console.log(pwd)

  var password = "";

  for (var i = 0; i < passlength; i++){
   password = password + pwd[Math.floor(Math.random() * pwd.length)]
  }

  console.log(password)
  
  
  
  
  
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;
}




// requirement functions
 
  



