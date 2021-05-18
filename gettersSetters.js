let shirts = {                   //again just practicing making a setter function.
    size:"small",
    faces:"none",
}
undefined
shirts.size="huge"              //manually changing the value of shirts.size to a different size. 
"huge"
let setShirtSize=(size){                // first mistake of the day! forgot to include the arrow syntax. 
        shirts.size=size,
        console.log("set function complete, shirt size is now" + shirts.size )
}
// VM531:1 Uncaught SyntaxError: Unexpected token '{'                  // js is not looking for a curly brace cuz i never told it a function was on the way. lol.
// let setshirtsSize=(size)
//         shirts.size=size,
//         console.log("set function complete, shirt size is now" + shirts.size )

// VM543:1 Uncaught ReferenceError: size is not defined
//     at <anonymous>:1:18
// (anonymous) @ VM543:1
let setshirtSize=(size)=>{                                      // finally figured out my mistake by this point. 
        shirts.size=size,
        console.log("set function complete, shirt size is now" + shirts.size )
}
undefined
setshirtsize("large")
VM563:3 set function complete, shirt size is nowlarge            //almost done! success but concats "...NOW" and the value of shirts.size so had to add the space "...NOW "
undefined
let setshirtSize=(size)=>{
        shirts.size=size,
        console.log("set function complete, shirt size is now " + shirts.size )
}
undefined
setshirtSize("big")
VM602:3 set function complete, shirt size is now big           //success!
undefined
setshirtSize("xs")
VM602:3 set function complete, shirt size is now xs           //more success!
undefined
shirts.size
"xs"
