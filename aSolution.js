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