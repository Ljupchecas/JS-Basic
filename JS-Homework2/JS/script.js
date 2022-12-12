let birthOfYear = prompt('Enter year of birth:');
console.log(birthOfYear);

let finalZodiac = (birthOfYear - 4) % 12;

// if(finalZodiac === 0) {
//     console.log('Your Chinese Zodiac is: Rat');
// } else if(finalZodiac === 1){
//     console.log('Your Chinese Zodiac is: Ox');
// } else if(finalZodiac === 2){
//     console.log('Your Chinese Zodiac is: Tiger');
// } else if(finalZodiac === 3){
//     console.log('Your Chinese Zodiac is: Rabbit');
// } else if(finalZodiac === 4){
//     console.log('Your Chinese Zodiac is: Dragon');
// } else if(finalZodiac === 5){
//     console.log('Your Chinese Zodiac is: Snake');
// } else if(finalZodiac === 6){
//     console.log('Your Chinese Zodiac is: Horse');
// } else if(finalZodiac === 7){
//     console.log('Your Chinese Zodiac is: Goat');
// } else if(finalZodiac === 8){
//     console.log('Your Chinese Zodiac is: Monkey');
// } else if(finalZodiac === 9){
//     console.log('Your Chinese Zodiac is: Rooster');
// } else if(finalZodiac === 10){
//     console.log('Your Chinese Zodiac is: Dog');
// } else if(finalZodiac === 11){
//     console.log('Your Chinese Zodiac is: Pig');
// } else{
//     console.log('Enter a valid year')
// }


// Neznam kako vo Switch da ja iskoristam finalZodiac, da ne bide so direkna formula vo switch.

switch((birthOfYear - 4) % 12){
    case 0:
        console.log('Your Chinese Zodiac is: Rat');
        break;
    case 1:
        console.log('Your Chinese Zodiac is: Ox');
        break;
    case 2:
        console.log('Your Chinese Zodiac is: Tiger');
        break;
    case 3:
        console.log('Your Chinese Zodiac is: Rabbit');
        break;
    case 4:
        console.log('Your Chinese Zodiac is: Dragon');
        break;
    case 5:
        console.log('Your Chinese Zodiac is: Snake');
        break;
    case 6:
        console.log('Your Chinese Zodiac is: Horse');
        break;
    case 7:
        console.log('Your Chinese Zodiac is: Goat');
        break;
    case 8:
        console.log('Your Chinese Zodiac is: Monkey');
        break;
    case 9:
        console.log('Your Chinese Zodiac is: Rooster');
        break;
    case 10:
        console.log('Your Chinese Zodiac is: Dog');
        break;
    case 11:
        console.log('Your Chinese Zodiac is: Pig');
        break;
    default:
        console.log('Enter a valid year');
        break;
}