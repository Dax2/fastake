

//gotta love those stack overflow solutions. 

const numToSeparate = 12345;

const arrayOfDigits = Array.from(String(numToSeparate), Number);      //ok so what Im learning here is that you need to nest things to make a sort of order of operations. reminds me of the {{((({{((()))}})))}} problem. 

console.log(arrayOfDigits);   //[1,2,3,4,5]
