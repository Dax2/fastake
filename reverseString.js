
//using built in methods and a very novice yet visualy clear structure. verbouse though. 

function reverseIt(str) {
    let conversionToArray = str.split('');
    let reverse = conversionToArray.reverse();
    let final = reverse.join('');
    return final
  }

//simply chaining these methods all together. 
  
function reverseIt(str) {
    return str.split('').reverse().join('');
}

// using a decrementing for loop. no built in methods. 
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}