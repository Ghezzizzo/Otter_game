let time = 50;
let showButton = false;
let helpActive = false;
let error = false;

// buttons container
const section = document.createElement('div');
document.body.appendChild(section);

// button +
const newDiv = document.createElement('button');
const plus = document.createTextNode('+');
section.appendChild(newDiv);
newDiv.appendChild(plus);

// button -
const newDiv2 = document.createElement('button');
const minus = document.createTextNode('-');
section.appendChild(newDiv2);
newDiv2.appendChild(minus);

// number
const paragraph = document.createElement('p');
const number = document.createTextNode(0);
document.body.appendChild(paragraph);
paragraph.appendChild(number);

// help button
const helpButton = document.createElement('button');
let bot = document.createTextNode('Ti serve aiuto?');

// buttons action
newDiv.addEventListener('click',add);
newDiv2.addEventListener('click',remove);
helpButton.addEventListener('click',automation);


// functions
function add() {
   number.textContent++;
   if (number.textContent >= 20 && showButton == false) {
   createHelpButton();
   }
}

function createHelpButton() {
        document.body.appendChild(helpButton);
        helpButton.appendChild(bot);
        showButton = true;
}

function automation() {
    if (helpActive == false) {
        number.textContent++;
        helpActive = true;
        bot.textContent = 'ferma!';
        console.log('attivo');
    } else {
        helpActive = false;
        bot.textContent = 'Ti serve aiuto?';
        console.log('inattivo');
        
    }
}

function remove() {
    if (number.textContent > 0) {
        number.textContent--;
    }
}

function tooFast() {
    if (number.textContent >= 46 && helpActive == true) {
        retry();
    }
}

function retry() {
        helpActive = false;
        showButton = false;
        document.body.removeChild(helpButton);
        alert('too fast... shit! I have to restar the counter');
        number.textContent = 0;
        bot.textContent = 'Ti serve aiuto?';
}

window.setInterval(function() {
    if (helpActive == true) {
        add();
    }
    tooFast();
}, time) 