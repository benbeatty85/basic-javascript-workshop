function firstLetter(inputString) {
    if (inputString === undefined) {
        return undefined;
    } else {
        return inputString[0];
    }
}

function lastLetter(inputString) {
    if (inputString === undefined) {
        return undefined;
    } else {
        return inputString[inputString.length - 1];
    }
}

function letterAtPosition(inputString, position) {
    if ((inputString === undefined) || (position < 0)) {
        return undefined;
    } else {
        return inputString.charAt(position);
    }
}

function addTwoNumbers(num1, num2) {
    if ((num1 === undefined) || (num2 === undefined)) {
        return undefined;
    } else if ((isNaN(num1)) || (isNaN(num2))) {
        return undefined;
    } else {
        return num1 + num2;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if ((num1 === undefined) || (num2 === undefined)) {
        return undefined;
    } else if ((isNaN(num1)) || (isNaN(num2))) {
        return undefined;
    } else {
        return num1 * num2;
    }
}

function calculator(operation, num1, num2) {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "sub") {
        return num1 - num2;
    } else if (operation === "mult") {
        return num1 * num2;
    } else if (operation === "div") {
        return num1 / num2;
    } else {
        return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
 
     if (typeof inputString === "string" && typeof numRepetitions === "number") {
        if (numRepetitions <=  0 || inputString.length === 0) {
             return "";
         }
         
         else {
             var stringRepeated = ""
             for (var i = 0; i< numRepetitions; i++) {
                 stringRepeated += inputString;
             }
             return stringRepeated;
         }
     }
     
     else {
         return undefined;
     }
  }

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

function longestWord(inputString) {
    if (inputString.length === 0) {
         return "";
     }
     
     else {
         var splitString = inputString.split(" " || "," || ";");
         var longest = 0;
         var word = null;
         for (var i = 0; i < splitString.length; i++) {
             if (longest < splitString[i].length) {
                 longest = splitString[i].length;
                 word = splitString[i];
            }
         }
         return word;
     }
}

function capitalize(inputString) {
    inputString = inputString.toLowerCase().split(" ");
    for (var i = 0; i < inputString.length; i ++) {
        inputString[i] = inputString[i].charAt(0).toUpperCase() + inputString[i].slice(1);
    }
    return inputString.join(" ");
}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {
}

function isPalindrome(inputString) {
    var re = /[\W_]/g;
    var lowerString = inputString.toLowerCase().replace(re, "");
    var reverseString = lowerString.split("").reverse().join("");
    return reverseString === lowerString;
}

function wrapCharacter(inputString) {
    
}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};