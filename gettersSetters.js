let dicks = {                   //again just practicing making a setter function.
    cocks:"small",
    faces:"none",
}
undefined
dicks.cocks="huge"              //manually changing the value of dicks.cocks to a different size. 
"huge"
let setCocksSize=(size){                // first mistake of the day! forgot to include the arrow syntax. 
        dicks.cocks=size,
        console.log("set function complete, cock size is now" + dicks.cocks )
}
VM531:1 Uncaught SyntaxError: Unexpected token '{'                  // js is not looking for a curly brace cuz i never told it a function was on the way. lol.
let setCocksSize=(size)
        dicks.cocks=size,
        console.log("set function complete, cock size is now" + dicks.cocks )

VM543:1 Uncaught ReferenceError: size is not defined
    at <anonymous>:1:18
(anonymous) @ VM543:1
let setCocksSize=(size)=>{                                      // finally figured out my mistake by this point. 
        dicks.cocks=size,
        console.log("set function complete, cock size is now" + dicks.cocks )
}
undefined
setCocksSize("thick")
VM563:3 set function complete, cock size is nowthick            //almost done! success but concats "...NOW" and the value of dicks.cocks so had to add the space "...NOW "
undefined
let setCocksSize=(size)=>{
        dicks.cocks=size,
        console.log("set function complete, cock size is now " + dicks.cocks )
}
undefined
setCocksSize("thick")
VM602:3 set function complete, cock size is now thick           //success!
undefined
setCocksSize("micro")
VM602:3 set function complete, cock size is now micro           //more success!
undefined
dicks.cocks
"micro"
