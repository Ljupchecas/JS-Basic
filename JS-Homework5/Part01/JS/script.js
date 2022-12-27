// --------------- FIRST H1 ---------------

let firstH1 = document.getElementById('myTitle');
firstH1.innerText = 'Yea! Cool page - Change 1';
firstH1.innerText += ' Addition 01';

// --------------- FIRST H1 ---------------



// --------------- FIRST PARAGRAPH ---------------

// First paragraph with Query Selector

let paragraph01 = document.querySelector('.paragraph');
paragraph01.innerText = 'This is an exercise. Its pretty easy - Change 1';
paragraph01.innerText += ' Addition 01';

// First paragraph with Class Name

// let paragraph01 = document.getElementsByClassName('paragraph')[0];
// paragraph01.innerText = 'This is an exercise. Its pretty easy - Change 1';
// paragraph01.innerText += ' Addition 01';

// --------------- FIRST PARAGRAPH ---------------



// --------------- SECOND PARAGRAPH ---------------

// Second paragraph with Class Name

let paragraph02 = document.getElementsByClassName('paragraph')[1];
paragraph02.innerText = 'No really, Its easy! - Change 1';
paragraph02.innerText += ' Addition 01';

// --------------- SECOND PARAGRAPH ---------------



// --------------- TAG TEXT ---------------

// Change text with Tag Name

let changeText = document.getElementsByTagName('text')[0];
changeText.innerText = 'Its about selecting elements and (tags??) - Change 1';
changeText.innerText += ' Addition 01'

// --------------- TAG TEXT ---------------



// --------------- SECOND H1 ---------------

// Second h1 with Tag Name - Druga idea za ova momentalno nemam

let secondH1 = document.getElementsByTagName('h1')[1];
secondH1.innerText = 'This should be changed - Change 1';
secondH1.innerText += ' Addition 01';

// --------------- SECOND H1 ---------------



// --------------- FIRST H3 ---------------

// Frist h3 with Tag Name - Druga idea za ova momentalno nemam

let firstH3 = document.getElementsByTagName('h3')[0];
firstH3.innerText = 'And also this! - Change 1';
firstH3.innerText += ' Addition 01';

// --------------- FIRST H3 ---------------


