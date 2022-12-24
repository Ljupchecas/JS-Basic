let arr = [3, 5, 6, 8, 3];

function minMax(array) {
    let min = array[0];
    let max = array[0];
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        if(isNaN(array[i])){
            console.log(`Is not a number`)
        } else if( array[i] > max) {
            max = array[i]
        } else if ( array[i] < min) {
            min = array[i]
        }
    }

    sum = min + max;
    return sum;
}

console.log(minMax(arr))
