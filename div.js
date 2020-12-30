let div = {                       // i like to just make an object a day and write a getter function at least as a daily exercise. 
    name:"the dolla tree",
    age:21,
    sign:"Libra",


}
undefined
let getName=(user)=>{return div.name}
undefined
let getName=(user)=>{return user.name}
undefined
getName(div)
"the dolla tree"
let getAge=(user)=>return user.name
VM531:1 Uncaught SyntaxError: Unexpected token 'return'
let getAge=(user)=> user.name
undefined
let getAge=(user)=> user.age
undefined
