let numberAss='456'                 //the number that will be passed in by a function call later
let newArray=[]                         //this is how we isolate each integer
for ( let i=0; i<numberAss.length; i++){    // iterate through the passed in integer
   
    newArray.push(numberAss[i]*numberAss[i]);    //pushing the result of each digit multiplied by itself to the new Array. 
}