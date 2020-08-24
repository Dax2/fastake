function frown(){
    console.log("frown init");
    return 6*3;
}
function face(){
    console.warn("face init");
    return frown();
}

face();
console.log('transfering from face to frown function');
console.warn('frown is next its the mini function in face');
frown()