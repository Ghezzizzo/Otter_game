// INIT //

// variables
let state = 0;
let containers = 3;
let numberOfBtn = 1;
let matchNumber = 0; 
let newChild = 10;
let child = 1;
let breeder = 0;
let newBreeder = 50;
let hunters = 0;
let removeHuner = 10;
let time = 10;
let firstHunt = true;
let huntSeason = false;
let highRisk = 30;
let endgame = 0;
let finalHottters = 0;
let death = 0;

// arrays
let cards = [
    'aumenta la prole',
    'allevatore',
    'caccia proibita'
]

let cardsDesc = [
    'Aumenta il numero di piccoli ad ogni accoppiamento',
    'Un aiuto per aiutarti ad auitarti nel tuo gravoso compito',
    'Emetti un divieto di caccia'
]

let sentences = [
    'Non ci sono lontre nel mondo',
    'Sono comparse delle lontre nel mondo',
    'I primi esemplari ormai si stanno abituando all\'habitat lacustre...',
    'siamo arrivati all\'equivalente della popolazione italiana... e continuano ad aumentare! GRANDE!'
]


// create a page division
for (let i = 0; i < containers; i++) {
    let paragraph = document.createElement('div');
    document.body.appendChild(paragraph);
    paragraph.classList.add("para");
}

let numContainer = document.getElementsByClassName('para')[0];
let txtContainer = document.getElementsByClassName('para')[1];
let btnContainer = document.getElementsByClassName('para')[2];

btnContainer.setAttribute('id','btnContainer');
// create upgrades cards
for (let i = 0; i < cards.length; i++) {
    let card = document.createElement('div');
    btnContainer.appendChild(card);
    card.classList.add("card");
    createBtn(cards[i],card);
    createDesc(cardsDesc[i],cards[i],card);
    document.getElementById(cards[i]).disabled = true;
}

const simpleBtnContainer = document.createElement('div');
numContainer.appendChild(simpleBtnContainer);
simpleBtnContainer.classList.add("btnContainer");

// button +
const btn1 = document.createElement('button');
const plus = document.createTextNode('+');
simpleBtnContainer.appendChild(btn1);
btn1.appendChild(plus);

// button -
const btn2 = document.createElement('button');
const minus = document.createTextNode('-');
simpleBtnContainer.appendChild(btn2);
btn2.appendChild(minus);

// number
const paragraph = document.createElement('p');
const number = document.createTextNode(0);
numContainer.appendChild(paragraph);
paragraph.appendChild(number);
paragraph.classList.add("number");

// text
const textEl = document.createElement('p');
const text = document.createTextNode(sentences[0]);
txtContainer.appendChild(textEl);
textEl.appendChild(text);

// buttons action
btn1.addEventListener('click',add);
btn2.addEventListener('click',remove);


// FUNCTIONS //

// for creation
function createBtn(name,position) {
    let btn = document.createElement('button');
    position.appendChild(btn);
    btn.appendChild(document.createTextNode(name));
    btn.setAttribute('id',name);
}

function createDesc(description,id,position) {
    let p = document.createElement('p');
    position.appendChild(p);
    p.appendChild(document.createTextNode(description));
    p.setAttribute('id',id);
}

// buttons
function add() {
    number.textContent = Number(number.textContent) + child;
}

function remove() {
    if (number.textContent > 0) {
        number.textContent--;
        death++;
    } 
}

function moreChild() {
    child++;
    document.getElementById(cards[0]).disabled = true;
    newChild = newChild * 10;
}

function addBreeder() {
    breeder--;
    document.getElementById(cards[1]).disabled = true;
    newBreeder = newBreeder * 8;
}

function breeding() {
    number.textContent = Number(number.textContent) - breeder * 4;
}

function hunting() {
    if (number.textContent > hunters * 10) {
        death = death + hunters * 10; 
    } else if (number.textContent > 0) {
        death = death + Number(number.textContent);
        console.log(death); 
    }
    number.textContent = Number(number.textContent) - hunters * 10;
}

function noHunting() {
    huntSeason = false;
    time = 60;
    hunters = 0;
}

function hunterCounter() {
    if (time > 0) {
        time--;
        if (firstHunt == false) {
            document.getElementById(cards[2]).disabled = true;  
            document.getElementById('huntDesc').textContent = 'divieto di caccia';
            document.getElementById('huntDesc').style.color = 'green';
        }

    } else {
        huntSeason = true;
        hunters = 1;
        if (firstHunt == true) {
            firstHunt = false;
            createDesc('I cacciatori sono entrati in azione','huntDesc',txtContainer);
            document.getElementById('huntDesc').style.color = 'red';
        } else {
            document.getElementById('huntDesc').textContent = 'I cacciatori sono entrati in azione';
            document.getElementById('huntDesc').style.color = 'red';
        }
        
    }  
}

function final() {
    let finalDiv = document.createElement('div');
    document.body.appendChild(finalDiv);
    finalDiv.setAttribute('id','endGame');

    let finalParas = [
        'GAME OVER',
        'Al mondo ora si trovano '  + finalHottters + ' lontre',
        'Sono morte ' + death + ' lontre'
    ]

    let info = [
        '\"È una specie con areale eurasiatico (dalla penisola iberica sino al Giappone) e nordafricano (Marocco, Tunisia e Algeria). L\'attuale distribuzione in Europa è molto frammentaria e in diversi paesi (ad esempio Paesi Bassi, Liechtenstein, Svizzera) è ormai estinta mentre in altri (Italia, Francia, Belgio, Germania) è presente con popolazioni residue poco numerose e isolate. È in aumento in Svezia.\"',
        '\"La lontra vive solo in zone non antropizzate ed è molto sensibile all\'inquinamento. Inoltre è un\'ottima pescatrice che è entrata in competizione con l\'essere umano: questo significa che negli ultimi 2-3 secoli la convivenza non è stata per nulla facile, a discapito della lontra, che è stata molto cacciata durante il XX secolo anche per la sua pelliccia, usata per l\'abbigliamento femminile.\"',
        '\"In Italia nel 2009 è stato redatto un piano d\'azione Nazionale dal ministero dell\'ambiente per la conservazione della lontra. Due sono gli obiettivi: intende promuovere la conservazione di una specie - la lontra eurasiatica (Lutra lutra, L. 1758) -, a forte rischio di estinzione nel nostro Paese. Il secondo affronta il più vasto tema della conservazione di uno degli ecosistemi più minacciati in Europa, considerato che la lontra è considerata sia specie indicatrice della qualità ambientale degli ecosistemi d’acqua dolce, sia specie ombrello, la cui protezione favorisce cioè quella di altre specie che utilizzano gli habitat acquatici e ripariali\"'
    ]

    for (let i = 0; i < finalParas.length; i++) {
        createDesc(finalParas[i],'par'+i,finalDiv);
    }
    
    createDesc(info[ Math.floor(Math.random() * info.length)],'info',finalDiv);

    let par = document.getElementsByTagName('p');
    par[0].style.fontWeight = '900';
    par[0].style.fontSize = '4rem';

}

function demon() {
    if (number.textContent == 0) {
        text.textContent = sentences[0];
    } else if (number.textContent >= 1 && number.textContent < 100) {
        text.textContent = sentences[1];
    } else if (number.textContent >= 100 && number.textContent < 600) {
        text.textContent = sentences[2];
    } else if (number.textContent >= 600 && number.textContent < 1200) {
        text.textContent = sentences[3];
    }

    if (number.textContent > newChild) {
        let btn = document.getElementById(cards[0]);
        btn.disabled = false;
        btn.addEventListener('click',moreChild);
    }

    if (number.textContent > newBreeder) {
        let btn = document.getElementById(cards[1]);
        btn.disabled = false;
        btn.addEventListener('click',addBreeder);
    }

    if (number.textContent < highRisk && huntSeason == true) {
        let btn = document.getElementById(cards[2]);
        btn.disabled = false;
        btn.addEventListener('click',noHunting);
    }

    if (endgame > 0) {
        endgame--;
    } else {
        state = 1;
        finalHottters = Number(number.textContent);
        document.body.removeChild(numContainer);
        document.body.removeChild(txtContainer);
        document.body.removeChild(btnContainer);

        final();
    }
}

window.setInterval(function() {
    if (state == 0){
        breeding();
        hunterCounter();
        if (number.textContent > 0) {
            hunting();   
        } 
        
        if (number.textContent < 0) {
           number.textContent = 0;
           
       }
       demon();
    }

}, 1000)

