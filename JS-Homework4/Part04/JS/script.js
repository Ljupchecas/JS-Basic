let numbers = ""
for(let i = 1; i < 21; i++){
    if(i % 2 == 0){
        numbers += `${i}\n`
    } else {
        numbers += `${i} `
    }
}

console.log(numbers)