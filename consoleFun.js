
//a few fun tips from #codedrip helpfull console log stuff including console[.table,.log,.warn,.error]


console.table({name: "daniel", hairColor:"brown"}).    
VM3368:1 (index)Value(index)Valuename"daniel"hairColor"brown"Object
undefined
console.error("dont do that")
VM3438:1 dont do that
(anonymous) @ VM3438:1
undefined
console.warn("you suck")
VM3487:1 you suck
(anonymous) @ VM3487:1
undefined
console.log({users})
VM3588:1 Uncaught ReferenceError: users is not defined
    at <anonymous>:1:14
(anonymous) @ VM3588:1
users
VM3602:1 Uncaught ReferenceError: users is not defined
    at <anonymous>:1:1
(anonymous) @ VM3602:1
let users= {
    name:"dan",
    car:"ford",

}
undefined
console.log({users})
VM3675:1 {users: {…}}users: {name: "dan", car: "ford"}__proto__: constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()arguments: (...)caller: (...)length: 0name: "toLocaleString"__proto__: ƒ ()[[Scopes]]: Scopes[0]toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()arguments: [Exception: TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    at Function.invokeGetter (<anonymous>:1:142)]caller: (...)length: 2name: "__defineGetter__"__proto__: ƒ ()[[Scopes]]: Scopes[0]__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()arguments: (...)caller: (...)length: 0name: "get __proto__"__proto__: ƒ ()[[Scopes]]: Scopes[0]No propertiesset __proto__: ƒ __proto__()
undefined
let bigDick = ()=>{
   return 1+1;
}
undefined
console.log({bigDick})
VM3804:1 {bigDick: ƒ}bigDick: ()=>{    return 1+1; }__proto__: constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
undefined
function fuckFace(a,b){
    return a+b;
    console.log({fuckFace})
}  

undefined
fuckFace(3,5)
8
function fuckFace(a,b){
    console.log({fuckFace})   
    return a+b;
   
}  

undefined
fuckFace(3,6)
VM3934:2 {fuckFace: ƒ}fuckFace: ƒ fuckFace(a,b)arguments: nullcaller: nulllength: 2name: "fuckFace"prototype: {constructor: ƒ}constructor: ƒ fuckFace(a,b)__proto__: Object__proto__: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()__proto__: Object[[FunctionLocation]]: <unknown>[[Scopes]]: Scopes[0][[FunctionLocation]]: VM3934:1[[Scopes]]: Scopes[2]__proto__: Object
9
let ppp=(a,b,c)=> {
    c = function(){a+b} 
}
undefined
let ppp=(a,b,c)=> {
    c = function(){a+b};
}
undefined
let ppp=(a,b,c)=> {
    c = function(){a+b};
    return a+b+c 
}
undefined
let ppp=(a,b,c)=> {
    c = function(){ return a+b};
    return a+b+c 
}
undefined
ppp(1,1,1)
"2function(){ return a+b}"
let ppp=(a,b,c)=> {
    c = function top(){ return a+b};
    return a+b+c 
}
undefined
ppp(1,1,1)
"2function top(){ return a+b}"
let ppp=(a,b,c)=> {
    c = ()=> return a+b;
    return a+b+c;
}
VM4192:2 Uncaught SyntaxError: Unexpected token 'return'
let ppp=(a,b,c)=> {                                     // i think here I'm trying to see what happens when you assign a function to oneo f the parameters. 
    c = ()=> a+b;
    return a+b+c;
}
undefined
ppp(1,1,1)
"2()=> a+b"

