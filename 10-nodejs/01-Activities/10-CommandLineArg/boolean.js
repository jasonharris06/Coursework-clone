var boolean = "";
var argument1 = process.argv[2];
var argument2 = process.argv[3];

if(argument1 === argument2){
    console.log("True");
}
console.log("False");
if ((argument1%7) ===0 && (argument2%7) ===0 ){
    console.log("multiple of 7");
}
console.log("Not a Multiple of 7")