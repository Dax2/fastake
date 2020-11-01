//not working. getting a syntax error; "invalid left hand side in assignment."

//errors aside, for readability I thought all the if else statements would look cleaner if I left bracket portions on one line as aposed to the usual enter/tab format.

/*for example I wrote it this way 

if(condtions){code}

instead of this way

if(conditions){
   code
}

*/

function fizz(){
    for(i=0;i<=100;i++){
    if (i%2=0){console.log("fizz");}
    else if(i%3=0){console.log("buzz");}
    else if(i%2=0 && i%3=0){console.log('fizzbuzz');}
    else console.log(i);
        }
    }
