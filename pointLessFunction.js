const daniel= {
    canCode:"without a fuck",
    isNotBitch:true,
}
undefined
daniel.canCode
"without a fuck"
if (daniel.isNotBitch = true){
    console.log("finally");
}
VM562:2 finally
undefined
if (daniel.isNotBitch != true){
    console.log("finally");
}
undefined
let action =()=> if (daniel.isNotBitch = true){
    console.log("finally");
}
VM635:1 Uncaught SyntaxError: Unexpected token 'if'
let action =()=> {if (daniel.isNotBitch = true){
    console.log("finally");
    }
}
