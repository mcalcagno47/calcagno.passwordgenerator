// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var input = window.prompt("Using numbers, how many characters in your password?");
  var passwordLength = parseInt(input);
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "?", ".", ",", ";", ":", "'",];


  if (isNaN(passwordLength)) {
    window.alert("Please use numbers")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please select a number between 8 and 128")
    return
  }

  var userWantsLowercase = window.confirm("Would you like lowercase letters in your password?");
  var userWantsUppercase = window.confirm("Would you like uppercase letters in your password?");
  var userWantsNumbers = window.confirm("Would you like numbers in your password?");
  var userWantsSpecials = window.confirm("Would you like special characters (!@#$ etc.) in your password?");

  var optionsCart = []


  if (userWantsLowercase === true) {
    optionsCart.push(...lowercase);
  }

  if (userWantsUppercase === true) {
    optionsCart.push(...uppercase);
  }

  if (userWantsNumbers === true) {
    optionsCart.push(...numbers);
  }

  if (userWantsSpecials === true) {
    optionsCart.push(...specials);
  }

  console.log(optionsCart);

  var generatedPassword = [];

  for (let i = 0; i < passwordLength; i++) {
    var randomDecimal = Math.random();
    var randomIndex = Math.floor(randomDecimal * optionsCart.length);
    var randomCharacter = optionsCart[randomIndex];
    generatedPassword.push(randomCharacter);
  }
  var finalStep = generatedPassword.join('');
  return finalStep

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
