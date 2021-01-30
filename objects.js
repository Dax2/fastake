let war = {                     //I am trying to make an object inside an object? an array of arrays but I want dot notation to access war.weapons[0]-->"battle axe"
    name: "dan",
    weapons: {"battle axe","mace", "deathpunch"},
    status: {"peace treaty", "active war", "negotiations"},
    
}


// success. simply changed the {} to [].

let war = {
    name: "dan",
    weapons: {"battle axe","mace", "deathpunch"},
    status: {"peace treaty", "active war", "negotiations"},
    
}
VM293:3 Uncaught SyntaxError: Unexpected token ','
let war = {
    name: "dan",
    weapons: ["battle axe","mace", "deathpunch"],                       // as desired, war.weapons[0]-->"battle axe" and so on. using the index of the array to select.
    status: ["peace treaty", "active war", "negotiations"],
    
}
undefined


//discovered that manipulating objects is not as complicated as once thought.

let name={                              //create an object
    name:"ass", 
    face:"stupid",

}
undefined
name.j="whore"                  //to add a key:value pair just declare it like you would a variable.
"whore"
name.go=(a,b)=>a+b              // even more fun. you can add an arrow function in there too. even pass params into it.
(a,b)=>a+b
name.go(2,3)
5                                // works just fine. 
name
