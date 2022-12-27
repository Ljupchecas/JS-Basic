let numbers = [3, 5, 6, 2, 7, 10, 15, 500];

let myNumbers = document.getElementById('myDiv');

function printNumbers1(number){
    let y = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        y += `${number[i]}`
        sum += numbers[i];
        if(numbers.length-1 == i){
            y += `=`
        } else {
            y += `+`
        }
    }
    myNumbers.innerHTML += `The result of the numbers (${y} ${sum})`
}

printNumbers1(numbers)




