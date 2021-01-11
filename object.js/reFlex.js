   
//so here I am flailing with the infamous following keyword: this. 

let core=(parameter1, parameter2)=> {
      name:parameter1,
      userid:parameter2,
}
VM35:4 Uncaught SyntaxError: Unexpected token ':'
let core={
        name:"name",
        userid:500,
}
undefined
core.userid
500
let core={
        name:"name",
        userid:500,
        function: function core(name){ name + "hello"}
}
undefined
core.function("dan")
undefined
core.function()
undefined
let core={
        name:"name",
        userid:500,
        function: function core(){ return this.name + "hello"};
}
VM366:4 Uncaught SyntaxError: Unexpected token ';'
let core={
        name:"name",
        userid:500,
        function: function core(){ return this.name + "hello"} //so here things have gone off the rails. 
}
undefined                                                               // no issue here but...
core.function("dan")
"namehello"                                                                   //so i was hoping to return "danhello" but got this.name which is still "name". function did not work. 
let core={
        name:"name",
        userid:500,
        changeName: function changeName(newName){ name=newName;                 
        return this.name + "hello"}
}
undefined
core.changeName("dan")
"namehello"
core.changeName(dan)
VM697:1 Uncaught ReferenceError: dan is not defined                        // changed my parameter to a var. completly wrong move.
    at <anonymous>:1:17
(anonymous) @ VM697:1
let core={
        name:"name",
        userid:500,
        changeName: function change(newName){ name=newName; 
        return this.name + "hello"}
}
undefined
core.changeName("dan")
"namehello"

 
   
   //just making a for in loop work. 
let x = [5,4,3,2,1]
   
for ( x in jazz) {console.log(jazz[x])}
