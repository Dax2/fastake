function assWass(a){
    a.pop;
}
undefined
let yaya=[]
undefined
yaya.push(1,2,3)
3
asswass(yaya)
VM502:1 Uncaught ReferenceError: asswass is not defined
    at <anonymous>:1:1
(anonymous) @ VM502:1
function assWass(a){
    a.pop();
}
undefined
assWass(yaya)
undefined
let users= {
    name:dan,
    car:ford,

}
VM743:2 Uncaught ReferenceError: dan is not defined
    at <anonymous>:2:10
(anonymous) @ VM743:2
let users= {
    name:"dan",
    car:"ford",

}
undefined
function getName(obj){
    return users.name;
}
undefined
function getName(obj){
    return obj.name;
}
undefined
getName(users)
"dan"
function setName(obj, changeName){
    obj.name=changeName;
    console.log(name);
}
undefined
setName(users, "josh")
VM1282:3 
undefined
setName(users,"Daniel")
VM1282:3 
undefined
console.log(users)
VM1652:1 {name: "Daniel", car: "ford"}
undefined
console.log(users)
VM2478:1 {name: "Daniel", car: "ford"}
undefined
