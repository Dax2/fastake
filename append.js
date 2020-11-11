//lets call this an attempt to play with the += thing everybody does all the time. there are many ways to do this i think.

//not sure how to do the -= type thing or anything to the alternative of the standard += thing. Im so limited I will expand here later. 

Failed to load resource: net::ERR_FAILED
let name = jon
for ( let i=0; i<10; i++){
    name +=1;
    console.log(name);
}
VM227:1 Uncaught ReferenceError: jon is not defined
    at <anonymous>:1:12
(anonymous) @ VM227:1
let name = "jon"
for ( let i=0; i<10; i++){
    name +=1;
    console.log(name);
}
VM232:4 jon1
VM232:4 jon11
VM232:4 jon111
VM232:4 jon1111
VM232:4 jon11111
VM232:4 jon111111
VM232:4 jon1111111
VM232:4 jon11111111
VM232:4 jon111111111
VM232:4 jon1111111111
undefined
