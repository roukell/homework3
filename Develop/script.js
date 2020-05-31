document.getElementById("generateBtn").addEventListener("click", function userInput() {
  let lowercase = confirm("Click Ok if you would like lowercase in your password, if not click Cancel");
  let uppercase = confirm("Click Ok if you would like lowercase in your password, if not click Cancel");
  let symbol = confirm("Click Ok if you would like lowercase in your password, if not click Cancel");
  let length = null;

  while (length == null) {
    let length = Number(prompt("How many character would you like to have in your password? (between 8 ~ 128 characters)"));
    if (length < 8 || length > 128 || length == null) {
      prompt("error, only 8~128 char, please retype.");
    } else {
      console.log(length);
      return length;
    }
  }
});


