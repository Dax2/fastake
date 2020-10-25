//this is a file with solutions for a problem asking:  write a function that takes in an intiger, determines if it is a square and returns a true false evaluation.

var isSquare = function(n){

    if((Math.sqrt(n) % 1) == 0)
      return true;
    else
      return false;
  }
  

  
  /* a more elegant approach not sure why we always use 
        wierd proofs like %1 */


  function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }



  //also this which is such a easy function to visualize
  //very readable to me

  const isSquare = n => Number.isInteger(Math.sqrt(n));


  //also this solution uses a nice check on the whole number situation. Is life meaningful?

  var isSquare = function(n){
    return Math.sqrt(n) % 1 == 0;
  }
