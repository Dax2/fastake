//lets call this an attempt to play with the += thing everybody does all the time. there are many ways to do this i think.

//not sure how to do the -= type thing or anything to the alternative of the standard += thing. Im so limited I will expand here later. 

Failed to load resource: net::ERR_FAILED
let name = jon                      //later we will see an error because I did not make jon a string by using "jon". so it was jon a var.
for ( let i=0; i<10; i++){
    name +=1;
    console.log(name);
}
VM227:1 Uncaught ReferenceError: jon is not defined      //so here its looking for a var jon. but i had meant to declare a var equal to a string. name = "jon" 
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


//ok so heres some -= action. 

let name = 10                 //changed name to an int because when name was a string the console executed 10 times but returned NaN each time. I miss Panera Bread.
for ( let i=0; i<10; i++){      //initially had changed this to decrementing but realized the number of times you subtract a thing is still ten times even if the result is a lower number. 
    name -=1;
    console.log(name);
}


//result was a count down from 10 to 0. upon each iteration of the for loop name was lowered by 1 and logged. This carried us from 10 to 0. 


for (let i = 0; i<=100; i++){
        console.log(i)
}
