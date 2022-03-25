// Assignment code here

let num = "0123456789";
let lowerC = "abcdefghijklmnopqrstuvwxyz";
let upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialC = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Create password
function generatePassword() {
  // select char count
  let leng = prompt("Select a password length between 8 and 128 characters");
  while (leng <= 7 || leng >= 129) {
    alert("Password must be between 8 and 128 characters");
    // resend count prompt if none selected
    let leng = prompt(
      "Please select a password length between 8 and 128 characters"
    );
  }
  // char selections
  let numChoice = confirm("Should password have numbers?");
  let lowerChoice = confirm("Should password have lowercase letters?");
  let upperChoice = confirm("Should password have uppercase letters?");
  let specChoice = confirm("Should password have special characters?");
  // if no selection, re-send
  while (
    numChoice !== true &&
    lowerChoice !== true &&
    upperChoice !== true &&
    specChoice !== true
  ) {
    alert("At least 1 must be selected!");
    let numChoice = confirm("Should password have numbers?");
    let lowerChoice = confirm("Should password have lowercase letters?");
    let upperChoice = confirm("Should password have uppercase letters?");
    let specChoice = confirm("Should password have special characters?");
  }
  // puts pass selections together
  let charControl = lowerC.concat(upperC, num, specialC);
  // randomization
  let ranPass = "";
  for (let i = 0; i < length; i++) {
    ranPass =
      ranPass + charControl[Math.floor(Math.random() * charControl.length)];
  }
  return ranPass;
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
