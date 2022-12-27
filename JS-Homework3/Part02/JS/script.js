// ----------------------------- HOMEWORK PART 2 -----------------------------

// DA POKAZE VO KONZOLA , SO VNESEN INPUT OD KOD

function humanToDogAgeCalculate(hAge, dAge) {
    let humanToDog = hAge * 7;
    let dogToHuman = dAge / 7;
    let personInput = humanToDog || dogToHuman;
    if(personInput === humanToDog){
        console.log(`The dog has ${personInput} years`);
    } else if(personInput === dogToHuman){
        console.log(`The human has ${personInput} years.`);
    }
}
humanToDogAgeCalculate(9,0)


// SO INPUT SAMO ZA DA PRESMETA DOGS VO HUMAS AGES

// let userInput = prompt('Enter a human years:');
// let dogAge = userInput * 7;
// console.log(`The dog is ${dogAge} years.`);


// SO INPUT DA GI PRESMETA I OD DOGS VO HUMANS I OBRATNO

// function dogAge(userInput1){
//     let dAge = userInput1 * 7;
//     return dAge;
// }

// function humanAge(userInput2){
//     let hAge = userInput2 / 7;
//     return hAge;
// }

// let personChoise = prompt('Enter D for Dog to Human or enter H for Human to Dog');
// let personInput = parseInt(prompt('Enter a years:'));

// if(personChoise === "D"){
//     console.log(`${humanAge(personInput)} years.`);
// } else if(personChoise === "H"){
//     console.log(`${dogAge(personInput)} years`);
// } else {
//     console.log('Enter a number');
// }

// ----------------------------- HOMEWORK PART 2 -----------------------------