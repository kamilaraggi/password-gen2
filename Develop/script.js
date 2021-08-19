// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwyxz";
var number = "1234567890";
var symbol = "!@#$%ˆ&*()_+<>:?{}-˜";


// Get references to the #generate element
var generateBtn = document.querySelector ("#generate");


var passwordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSymbol;
var userChoices;

// Write password to the #password input
function writePassword(passwordLength, confirmLowerCase, confirmUpperCase, confirmNumber, confirmSymbol) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());

function generatePassword(){

var passwordLength = window.prompt("Password size. Choose a number between 8 - 128 characters");
console.log("password length " + passwordLength);

if (!passwordLength){
  alert("required value");
} else if (passwordLength<8 || passwordLength >128) {
  passwordLength = window.prompt ("Choose a number between 8 - 128");

} else{
 
  var confirmLowerCase = window.confirm("Password must include Lower Case characters.")
  console.log("lower case " + confirmLowerCase);

  var confirmUpperCase = window.confirm("Password must include Upper Case characters.")
  console.log("upper case " + confirmUpperCase);

  var confirmNumber = window.confirm("Password must include Number characters.")
  console.log("number " + confirmNumber);

  var confirmSymbol = window.confirm("Password must include Symbol characters.")
  console.log("symbol " + confirmSymbol);

if (!confirmLowerCase && !confirmUpperCase && !confirmNumber && !confirmSymbol){
  userChoices = alert(" Please select one! "); 
}}

let password = '';
let userChoices = [];

if (confirmLowerCase) password += lowerCase;

if (confirmUpperCase) password += upperCase;

if (confirmNumber) password += number;

if (confirmSymbol) password += symbol;

const allChoices = []
var returnPassword = '';

for (var i = 0; i < passwordLength; i++) {
  returnPassword = returnPassword+password[Math.floor(Math.random() * password.length)]
}


return returnPassword;

}