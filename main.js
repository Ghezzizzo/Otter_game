let time = 50;
let showButton = false;
let helpActive = false;
let error = false;
let angry = 0;
let containers = 3;

for (let i = 0; i < containers; i++) {
    let paragraph = document.createElement('div');
    document.body.appendChild(paragraph);
    paragraph.classList.add("para");
}

let btnContainer = document.getElementsByClassName('para')[2];
let numContainer = document.getElementsByClassName('para')[1];
let helpContainer = document.getElementsByClassName('para')[0];

helpContainer.setAttribute('id','helpContainer');

// buttons container
const section = document.createElement('div');
document.body.appendChild(section);

// button +
const btn1 = document.createElement('button');
const plus = document.createTextNode('+');
btnContainer.appendChild(btn1);
btn1.appendChild(plus);

// button -
const btn2 = document.createElement('button');
const minus = document.createTextNode('-');
btnContainer.appendChild(btn2);
btn2.appendChild(minus);

// number
const paragraph = document.createElement('p');
const number = document.createTextNode(0);
numContainer.appendChild(paragraph);
paragraph.appendChild(number);
paragraph.classList.add("number");

// help button
const helpButton = document.createElement('button');
let bot = document.createTextNode('Ti serve aiuto?');

// reset button
const resetButton = document.createElement('button');
let reset = document.createTextNode('Reset');

// dialogue paragraph
const dialogue = document.createElement('p');
dialogue.classList.add("dialogue");

// buttons action
btn1.addEventListener('click',add);
btn2.addEventListener('click',remove);
helpButton.addEventListener('click',automation);
resetButton.addEventListener('click',retry);

// functions
function add() {
   number.textContent++;
   if (number.textContent >= 20 && showButton == false) {
   createHelpButton();
   }
   mistake();
}

function remove() {
    if (number.textContent > 0) {
        number.textContent--;
    } else {
        alert('ma scusami... come puoi contare qualcosa di negativo?');
    }
    mistake();
}

function automation() {
    if (helpActive == false) {
        number.textContent++;
        helpActive = true;
        angry = 1;
        bot.textContent = 'ferma!';
        console.log('attivo');
        btn1.removeEventListener('click',add);
        btn2.removeEventListener('click',remove);
    } else {
        helpActive = false;
        angry = 0;
        bot.textContent = 'Ti serve aiuto?';
        console.log('inattivo');
        btn1.addEventListener('click',add);
        btn2.addEventListener('click',remove);
    }
}

function createHelpButton() {
    helpContainer.appendChild(helpButton);
    helpButton.appendChild(bot);
    showButton = true;
}

function tooFast() {
    if (number.textContent == 46 && helpActive == true) {
        retry();
    }
}

function mistake() {
    if (number.textContent == 49 && error == false) {
        number.textContent = 52;
        alert('aspetta... qualcosa non va...');
        console.log('è arrivato a 49');
    } else if (number.textContent == 51 && error == false) {
        number.textContent = 48;
        console.log('è arrivato a 51');
        alert('aspetta... qualcosa non va...');
    } else if (number.textContent == 40  && error == false && angry == 0) {
        noMercy();
    }
}

function retry() {
    helpActive = false;
    showButton = false;
    error = true;
    if (angry == 1) {
        helpContainer.removeChild(helpButton);
        btn1.addEventListener('click',add);
        btn2.addEventListener('click',remove);
        alert('oh merda! Sono andato troppo veloce... Devo resettare tutto');   
    } else if (angry == 2) {
        helpContainer.removeChild(dialogue);
        helpContainer.removeChild(resetButton);
    }
    
    number.textContent = 0;
    bot.textContent = 'Ti serve aiuto?';
}

function noMercy() {
    angry = 2;
    helpContainer.removeChild(helpButton);
    let noHelp = document.createTextNode('Ah quindi non ti serve è!? VA BENE.');
    helpContainer.appendChild(dialogue);
    dialogue.appendChild(noHelp);
    dialogue.style.color = 'red';
    dialogue.style.fontSize = '3rem';
    dialogue.style.fontWeight = '900';
    helpContainer.appendChild(resetButton);
    resetButton.appendChild(reset);
}

window.setInterval(function() {
    if (helpActive == true) {
        add();
    }
    tooFast();
    
}, time) 