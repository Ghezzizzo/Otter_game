

// button +
const newDiv = document.createElement('button');
const plus = document.createTextNode('+');
document.body.appendChild(newDiv);
newDiv.appendChild(plus);

// button -
const newDiv2 = document.createElement('button');
const minus = document.createTextNode('-');
document.body.appendChild(newDiv2);
newDiv2.appendChild(minus);

//number
const paragraph = document.createElement('p');
const number = document.createTextNode(0);
document.body.appendChild(paragraph);
paragraph.appendChild(number);

function add() {
   number.textContent++;
}

function remove() {
    number.textContent--;
}

newDiv.addEventListener('click',add);
newDiv2.addEventListener('click',remove);