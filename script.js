  
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
function getPasswordOptions() {
    //Password Length
    var length = parseInt(
        prompt("How many characters would you like your password to contain? You must select between 8 and 128 characters.")
);

//Ensure password length is a number
if (isNaN(length) === true) {
    alert("Password length must be a number.");
    return;
}

//Ensure password is at least 8 characters
if (length < 8) {
    alert("Password must be at least 8 characters.");
    return;
}

//Ensure password is not more than 128 characters
if (length > 128) {
    alert("Password may not be more than 128 characters.")
    return;
}

//Confirm use of uppercase letters
var hasUpperCase = confirm(
    "Click OK to include uppercase letters in your password."
);

//Confirm use of lowercase characters
var hasLowerCase = confirm(
    "Click OK to include lowercase letters in your password."
);

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
    hasSpecialCharacters === false
    ) {
    alert("You must select at least one type of character. Please try again.");
    return;
}

//Store User Input
var passwordOptions = {
    length: length,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters,
};

return passwordOptions;
}

//Pull from Array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];

    return randElement;
}

//Generate Password
function generatePassword() {
    var options = getPasswordOptions();
    var result = [];

//Store types of characters
var possibleCharacters =[];

//Contain at least one of each type of character
var guaranteedCharacters = [];

//Add UpperCase Character
if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
}

//Add LowercaseCharacter
if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
}

//Add Number
if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(num);
    guaranteedCharacters.push(getRandom(num));
}

//Add Special Characters
if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacter);
    guaranteedCharacters.push(getRandom(specialCharacter));
}

//Loop to iterate over the password length from the options object
for (var i = 0; i <options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
}

//Ensure guaranteed character included in result
for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
}

//Pass to writePassword
return result.join('');
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