// Assignment code here
let num = "0123456789";
let lowerC = "abcdefghijklmnopqrstuvwxyz";
let upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialC = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Create password
function generatePass() {
  let pass = "";
  let length = prompt("Select a password length between 8 and 128 characters");
  while (length <= 7 || length >= 129) {
    alert("Password must be between 8 and 128 characters");
    let length = prompt(
      "Please select a password length between 8 and 128 characters"
    );
  }

  let numChoice = confirm("Should password have numbers?");
  let lowerChoice = confirm("Should password have lowercase letters?");
  let upperChoice = confirm("Should password have uppercase letters?");
  let specChoice = confirm("Should password have special characters?");
  while (!numChoice && !lowerChoice && !upperChoice && !specChoice) {
    alert("At least 1 must be selected!");
    let numChoice = confirm("Should password have numbers?");
    let lowerChoice = confirm("Should password have lowercase letters?");
    let upperChoice = confirm("Should password have uppercase letters?");
    let specChoice = confirm("Should password have special characters?");
  }
}

// input validation
if (numChoice) {
  pass += numChoice;
}
if (lowerChoice) {
  pass += lowerChoice;
}
if (upperChoice) {
  pass += upperChoice;
}
if (specChoice) {
  pass += specChoice;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
