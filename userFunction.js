//I'm so sorry. this is garbage. as the tech lead says, "all code is garbage." 

// a nieve implemention if you would dare call it that, of a function that will take in a name email and pw and create a unique user with a user number that is tied to them only. 



Math.random(3)
0.9040105905540203
Math.random()
0.9873620970304029
Math.random()
0.0921782312035202
let userCounter=0
function newUser(name, email,pw){
    userIdNumber=userCounter;
    userCounter++;
    user=userIdNumber+name;
    userName=name;
    userEmail=email;
    userPw=pw;
    return user;
    }
undefined
newUser(dan,good2gold,foxtrot)
VM503:1 Uncaught ReferenceError: dan is not defined
    at <anonymous>:1:9
(anonymous) @ VM503:1
let userCounter=0
function newUser(name, email,pw){
    let userIdNumber=userCounter;
    userCounter++;
    const user = userIdNumber+name
    const userName=name;
    const userEmail=email;
    const userPw=pw;
    return user;
    }
undefined
newUser(dan,good2gold,foxtrot)
VM524:1 Uncaught ReferenceError: dan is not defined
    at <anonymous>:1:9
(anonymous) @ VM524:1
let userCounter=0
function newUser(name, email,pw){
    let userIdNumber=userCounter;
    userCounter++;
    const user = userIdNumber+name
    const userName=name;
    const userEmail=email;
    const userPw=pw;
    return user;
    }
