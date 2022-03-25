// Assignment code here
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowerC = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let upperC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
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
let charControl = [];

function promts() {
  let charControl = [];
  // char selections
  let numChoice = "Should password have numbers?";
  let lowerChoice = "Should password have lowercase letters?";
  let upperChoice = "Should password have uppercase letters?";
  let specChoice = "Should password have special characters?";
  // select char count
  let leng = prompt("Select a password length between 8 and 128 characters");
  while (leng <= 7 || leng >= 129) {
    alert("Password must be between 8 and 128 characters");
    return false;
  }

  // if no selection, re-send
  /*while (
    numChoice !== true &&
    lowerChoice !== true &&
    upperChoice !== true &&
    specChoice !== true
  ) {
    alert("At least 1 must be selected!");
  }*/
  // puts pass selections together
  if (confirm(numChoice)) {
    charControl = charControl.concat(num);
  }

  if (confirm(lowerChoice)) {
    charControl = charControl.concat(lowerC);
  }

  if (confirm(upperChoice)) {
    charControl = charControl.concat(upperC);
  }

  if (confirm(specChoice)) {
    charControl = charControl.concat(specialC);
  }
  return true;
}

// Create password
function generatePassword() {
  let ranPass = "";
  // randomization
  for (let i = 0; i < leng; i++) {
    randomized = Math.floor(Math.random() * charControl.length);
    ranPass = ranPass + charControl[randomized];
  }
  return ranPass;
}

// Write password to the #password input
function writePassword() {
  let choices = promts();
  var passwordText = document.querySelector("#password");
  if (choices) {
    var password = generatePassword();
    passwordText.value = password;
  }
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
