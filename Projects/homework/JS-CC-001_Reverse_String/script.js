let str = prompt('Write some words and get it reversed');

const reversedString = (str) => {
    return str.split('').reverse().join("");
};

console.log(reversedString(str));