// first example is not refactored. started with simple a+b function to practice some logic and arrows etc. 

let theHeightMustNotBeZero= new Error('woops bitcho, you fucked up. the height must be more than zero')  //changing it to an area calculator and adding some custom error codes. 

let gugug=(a,b)=> {         //
    if (a<0||b<0){
        return theHeightMustNotBeZero;
    } else 
    return a+b;
}

gugug(1,2);
gugug(-1,3);
gugug(1,-4)
