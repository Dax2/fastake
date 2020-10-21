let randomNumber=()=> Math.random
undefined
randomNumber()
ƒ random() { [native code] }
let randomNumber=()=> Math.random()
undefined
randomNumber()
0.525348134902186
let randomNumber= a => a *  Math.random()
undefined
randomNumber(3)
1.4192190607934052
let randomArrow=()=> Math.random()
undefined
randomArrow()
0.995301970987698
let randomArrow=(a,b)=> Math.floor(Math.random() * a * b)
undefined
randomArrow(2,5)
6
let randomArrow=(a,b)=> Math.floor(a * b * Math.random())
undefined
randomArrow(2,5)
5
let notNeg= num=> num>=0;
undefined
notNeg(3)
true
let notNeg= num=> {
    if (num>=0){ return "yay hoe"}
    
}
undefined
)
VM2393:1 Uncaught SyntaxError: Unexpected token ')'
let notNeg= num=> {
    if (num>=0){ return "yay hoe"}
    else ;
}
undefined
let notNeg= num=> {
    if (num>=0){ return "yay hoe"}
    else return;
}
undefined
let notNeg= num=> {
    if (num>=0){ return "yay hoe"}
    else num>=0;
}
undefined
let notNeg= num=> {
    if (num>=0){ return "yay hoe"}
    else return false; 
}
undefined
let dogBreath =(dog,breath)=> {
    dog.tostring();
    breath.tostring();
    console.log( dog + "has" + breath + "all the time.");
}
let jove=(x)=>{if (x < 10){
    alert("if you don't ");
    } else if (x>100){
        alert("hell yeah?");
    }
}
