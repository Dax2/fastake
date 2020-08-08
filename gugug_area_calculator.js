let theHeightMustNotBeZero= new Error('woops bitcho, you fucked up the height must be more than zero')
let thewidthMustNotBeZero= new Error('woops bitcho, you fucked up the width must be more than zero')

let gugug=(a,b)=> {
    if (a<0){
        return theHeightMustNotBeZero;
    } 
    
    else if (b<0){
        return thewidthMustNotBeZero
    }

        else 
    return a+b;
}

console.log('i am a pretty little puppet');


console.log(gugug(-1,3));
console.log(gugug(1,7));
console.log(gugug(1,-5));
gugug(-1,3);
gugug(1,-4)
