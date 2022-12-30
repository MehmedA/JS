function reverseString() {
    let s =prompt();
    let str = s.split(" ");
    let newString = " ";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += " ";
      newString += str[i];
    }
    return newString;
  }
  let result = reverseString();
  console.log(result);