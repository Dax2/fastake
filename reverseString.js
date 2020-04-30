function reverseIt(str) {
    let conversionToArray = str.split('');
    let reverse = conversionToArray.reverse();
    let final = reverse.join('');
    return final
  }