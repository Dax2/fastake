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
