  
// Assignment code here

//Array for UpperCase Latters
var upperCase = [
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
]

//Array for LowerCase Letters

var lowerCase = [
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
]

//Random Number

var num = Math.floor(Math.random()*10);

//Array for Special Characters

var specialCharacter = [
    "U+0021",
    "U+0022",
    "U+0023",
    "U+0024",
    "U+0025",
    "U+0026",
    "U+002A",
    "U+003F",
    "U+0040",
]

//Function to prompt user
function promptUser() {
    //Password Length
    var passwordLength = parseInt(
        window.prompt("How many characters would you like your password to contain? You must select between 8 and 128 characters.")
    )
};

//Check validity of password length response
if (passwordLength < 8 || passwordLength > 128) {
    alert("You must choose a number between 8 and 128. Please try again.")
    return;
}

//Confirm use of uppercase letters
var hasUpperCase = confirm(
    "Click OK to include uppercase letters in your password."
)

//Confirm use of lowercase characters
var hasLowerCase = confirm(
    "Click OK to include lowercase letters in your password."
)

//Confirm use of numeric values
var hasNumbers = confirm(
    "Click OK to include numeric values in your password."
);

//Confirm use of special characters
var hasSpecialCharacters = confirm(
    "Click OK to include special character(s) in your password."
);

//Make sure user has selected at least one option.
if (
    hasUpperCase === false &&
    hasLowerCase === false &&
    hasNumbers === false &&
    hasSpecialCharacters === false &&
) {
    alert("You must select at least one type of character. Please try again.");
    return;
}

//Store User Input
var passwordOptions = {
    passwordLength: passwordLength,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters,
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