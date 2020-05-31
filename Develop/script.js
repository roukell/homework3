

// User click on generateBtn, enter data, and computer obtain the values and pass them into resultEl.
document.getElementById("generateBtn").addEventListener("click", function userInput() {
  const charLowercase = confirm("Click Ok if you would like lowercase in your password, if not click Cancel");
  const charUppercase = confirm("Click Ok if you would like uppercase in your password, if not click Cancel");
  const charSymbol = confirm("Click Ok if you would like symbols in your password, if not click Cancel");
  const charNumber = confirm("Click Ok if you would like numbers in your password, if not click Cancel");

  let charLength = null;

  while (charLength == null) {
    let charLength = Number(prompt("How many character would you like to have in your password? (between 8 ~ 128 characters)"));
    if (charLength < 8 || charLength > 128 || charLength == null) {
      prompt("error, only 8~128 char, please retype.");
    } else
    {
      generatePassword(charLength, charLowercase, charUppercase, charSymbol, charNumber);
      return charLength;
    }
  }
});

const randomFunc = {
  charLowercase: getRandomLower,
  charUppercase: getRandomUpper,
  charNumber: getRandomNumber,
  charSymbol: getRandomSymbol,
};

// Generate password function
function generatePassword(charLength, charLowercase, charUppercase, charSymbol, charNumber){
  // 1. initial password variable
  let generatedPassword = "";
  const typesCount = charLowercase + charUppercase + charSymbol + charNumber;
  console.log("typesCount: ", typesCount);
  
  const typesArray = [{charLowercase}, {charUppercase}, {charSymbol}, {charNumber}].filter(item => Object.values(item)[0]);
  console.log("typesArray: ", typesArray);

  // 2. if user selected nothing, password will not generate
  if (typesCount === 0){
    return "";
  }

  // 3. loop over length call generator function for each type
  for (let i = 0; i <= charLength-1; i += typesCount) {
    typesArray.forEach(type => {const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);

    generatedPassword = generatedPassword + randomFunc[funcName]();
    });
  }
console.log(generatedPassword);
  
}


// Generate random numbers, uppercase, lowercase, and symbols.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()_-+{}[]|:;',.=<>/"
  return symbols[Math.floor(Math.random() * symbols.length)];
}
