// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to generate password with user input
function generatePassword(length, options) {
  var password = "";
  var possibleCharacters = [];

  if (!options) {
    options = {};
  }

  if (options.uppercase) {
    possibleCharacters += upperCasedCharacters;
  }
  if (options.lowercase) {
    possibleCharacters += lowerCasedCharacters;
  }
  if (options.numbers) {
    possibleCharacters += numericCharacters;
  }
  if (options.specialCharacters) {
    possibleCharacters += specialCharacters;
  }

  if (possibleCharacters === "") {
    possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  }

  for (var i = 0; i < length; i++) {
    var randomSet = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    var newChar = randomSet[Math.floor(Math.random() * randomSet.length)];
    if (newChar !== ",") {
      password += newChar
    } else {
      i -= 1
    }
  }
  return password
}

function generate() {
  var options = {
    uppercase: document.querySelector("#uppercase").checked,
    lowercase: document.querySelector("#lowercase").checked,
    numbers: document.querySelector("#numbers").checked,
    specialCharacters: document.querySelector("#specialCharacters").checked
  };
  var length = document.querySelector("#length").value
  var password = generatePassword(length, options);
  return password
}
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generate();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);