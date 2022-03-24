// Assignment code here
let num = "0123456789";
let lowerC = "abcdefghijklmnopqrstuvwxyz";
let upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialC = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Create password
function generatePass() {
  let choice = "";
  let length = prompt("Select a password length between 8 and 128 characters");
  while (length <= 7 || length >= 129) {
    alert("Password must be between 8 and 128 characters");
    let length = prompt(
      "Please select a password length between 8 and 128 characters"
    );
  }
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
