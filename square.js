var isSquare = function(n){             //setting a var equal to a function. es6 we use let instead of var. 
    half = n/2;                         //get half the number
    if (n == half * 2 && n >= 0){       // conditional statement that totally misses the mark
      return true
  }
    else
    return false;
  }
