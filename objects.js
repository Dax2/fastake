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


// now recently I got I think a json package when a site failed to load. 
// looked like a bunch of js objects. so uncovered a few trail heads. led to XML and SGML(standard generalized language, new to me).
// so I cam across this...

{"widget": {                                        // I realize that this reminds me of the intro to mongodb.
    "debug": "on",
    "window": {                                             // just key value pairs inside of key value pairs of key value pairs...lol. 
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}}    

                                                                //The same text expressed as XML:

<widget>
    <debug>on</debug>
    <window title="Sample Konfabulator Widget">
        <name>main_window</name>
        <width>500</width>
        <height>500</height>
    </window>
    <image src="Images/Sun.png" name="sun1">
        <hOffset>250</hOffset>
        <vOffset>250</vOffset>
        <alignment>center</alignment>
    </image>
    <text data="Click Here" size="36" style="bold">
        <name>text1</name>
        <hOffset>250</hOffset>
        <vOffset>100</vOffset>
        <alignment>center</alignment>
        <onMouseUp>
            sun1.opacity = (sun1.opacity / 100) * 90;
        </onMouseUp>
    </text>
</widget>



                                        // ok so I need to find out how to use api that are based on exchanging json files. 
