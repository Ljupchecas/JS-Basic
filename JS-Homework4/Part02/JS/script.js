function addNumbers (numbers) {
    let sum = 0;
    for(let i = 0; i <5; i++){
        sum = sum + numbers[i];
    }
    return sum;
}

function validateNumber(number){
    if(isNaN(number)){
        alert("Array contains something else than a number.")
        return false
    }else{
        return true
    }
}

function inputNumbers(){
    let numbers = [];
    let i = 0
    while(i<5){
        let number = parseInt(prompt(`Enter number ${i+1}`)) 
        if(validateNumber(number)){
            numbers[i] = number
            i++
        }
    }
    // console.log(`The sum is ${addNumbers(numbers)}`)
    alert(`The sum is ${addNumbers(numbers)}`)
}

inputNumbers()