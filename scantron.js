function checkExam(array1, array2) {            //passing in an answer sheet (array1) and a students answers (array2) to be compared
    var score = 0;                              //a global scope score variable
      for (var i = 0; i < array2.length; i++){  //for loop to look for unanswered questions
          if (array2[i] === ""){                //clients asked for blank answers to be given a 0 (points)
             score += 0                         //
          } else if (array1[i] === array2[i]){  //did we set the for loop for both arrays? were comaparing each indices     
              score += 4                        // clients asked correct ansewers to be given 4 points
          } else if (array1[i] !== array2[i]){  // If the answers don't match remove one point
             score -= 1                         // strange to give a zero for no answer and a -1 for a wrong answer, shouldn't they both be zero  
          }     
      } 
        if (score >= 0){                        // this is odd. we only release the score if it is greater than zero but if the student got a negative score it would not be reflected here.
          return score;                         // the client may want to actively punish wrongness opportunity  cost non answers ans reward correctness 
        } else {                                //
          return 0                              // this was done to baisically negate the negative outcomes. 
        }
   }