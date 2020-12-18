let dicks = {
    cocks:"small",
    faces:"none",
}
undefined
dicks.cocks="huge"
"huge"
let setCocksSize=(size){
        dicks.cocks=size,
        console.log("set function complete, cock size is now" + dicks.cocks )
}
VM531:1 Uncaught SyntaxError: Unexpected token '{'
let setCocksSize=(size)
        dicks.cocks=size,
        console.log("set function complete, cock size is now" + dicks.cocks )

VM543:1 Uncaught ReferenceError: size is not defined
    at <anonymous>:1:18
(anonymous) @ VM543:1
let setCocksSize=(size)=>{
        dicks.cocks=size,
        console.log("set function complete, cock size is now" + dicks.cocks )
}
undefined
setCocksSize("thick")
VM563:3 set function complete, cock size is nowthick
undefined
let setCocksSize=(size)=>{
        dicks.cocks=size,
        console.log("set function complete, cock size is now " + dicks.cocks )
}
undefined
setCocksSize("thick")
VM602:3 set function complete, cock size is now thick
undefined
setCocksSize("micro")
VM602:3 set function complete, cock size is now micro
undefined
dicks.cocks
"micro"
