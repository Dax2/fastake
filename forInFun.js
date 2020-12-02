let allUsers = {            //assigning a variable to run a for/in loop on. 
    user:"jon",

}
undefined
let allUsers = {
    user0:"jon",
    user1:"dan",

}
undefined
let allUsers = {
    user0:"jon",
    user1:"dan",
}
undefined
function getAllUsers(list){
    for (let property in list){
        console.log(`${property}: ${list[property]}`);
    }
}
undefined
getAllUsers(alllUsers)
VM517:1 Uncaught ReferenceError: alllUsers is not defined                  //typo: three l's in allUsers. 
    at <anonymous>:1:13
(anonymous) @ VM517:1
getAllUsers(allUsers)
VM479:3 user0: jon
VM479:3 user1: dan
undefined
getAllUsers()
undefined
let joe= {
    name:"dopa",
    age:33,
    fuck:"never",
}
undefined
getAllUsers(joe)
VM479:3 name: dopa
VM479:3 age: 33
VM479:3 fuck: never
