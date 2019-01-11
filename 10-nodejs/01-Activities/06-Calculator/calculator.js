var action = process.argv[2].toLowerCase();
var value1 = parseInt(process.argv[3]);
var value2 = parseInt(process.argv[4]);

switch (action){
    case "add":
        console.log(value1+value2);
        break;
    
    case "subtract":
        console.log(value1-value2);
        break;

    case "multiply":
        console.log(value1*value2);
        break;

    case "divide":
        console.log(value1/value2);
        break;

    case "remainder":
        console.log(value1%value2);
        break;

default:
}


