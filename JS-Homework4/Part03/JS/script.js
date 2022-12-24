let array = ["Hello", "there", "students", "of", "SEDC", "!"];

function printArray(array){
    let a = '';
    for(let i = 0; i < array.length; i++){
        a += ` ${array[i]}`
    }
    return a;
}

console.log(printArray(array));