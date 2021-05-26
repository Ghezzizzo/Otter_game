// INIT //

// variables

let state = 0;
let otters = 0;
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
let endgame = 30; 
let death = 0;
let upChild = false;
let upBreeder = false;
let upHunting = false;
let cardNumber = 0;
let overPopolation = 300;
let overKill = 250;
let friend = '@Selly';
let instaAri = friend.link('https://www.instagram.com/arinpuglia/');

// arrays
let archievements = [
    'Nessuna morte',
    'killer',
    'estinzione',
    'sovrapopolato',
    'salvatore',
    'self-made',
    'vittoria insanguinata'
]

let explenation = [
    'stai per provare un mini-gioco, della durata di 30 secondi, in cui l\'obiettivo sarà quello di accrescere il numero di lontre. Inizierai trovandoti un numero pari a 0 e due bottoni: il primo aumenta il numero di lontre mentre il secondo... bè il secondo le \"toglie di mezzo\" diciamo.',
    'Andando avanti, se riuscirai ad aumentarne il numero, compariranno alcuni aiuti che ti porteranno più vicino al tuo obiettivo. Ma fai attenzione! Non tutti a questo mondo vogliono salvaguardare le lontre... ',
    'Ad ogni modo... perchè le lontre? Bè di sicuro perchè sono degli animali bellissimi e coccolosissimi (parole della mia amica ',
    'Ho aggiunto anche alcuni obiettivi da raggiungere... ' + archievements[0]+ ', ' + archievements[1]+ ', ' + archievements[2]+ ', ' + archievements[3]+  ', ' + archievements[4]+  ', ' + archievements[5]+  ', ' + archievements[6],
    'Ma ora basta leggere... Cominciamo!',
]

let gameParts = [
    'numContainer',
    'txtContainer',
    'btnContainer'
]

let cards = [
    'aumenta la prole',
    'allevatore',
    'caccia proibita'
]

let idCards = [
    'id0',
    'id1',
    'id2'
]

let idButtons = [
    'btn0',
    'btn1',
    'btn2'
]

let cardsDesc = [
    'Aumenta il numero di piccoli ad ogni accoppiamento',
    'Un aiuto per aiutarti ad auitarti nel tuo gravoso compito',
    'Emetti un divieto di caccia'
]

let cardInfo = [
    'cucciolata di ' + child + ' lontre',
    'allevatori: ' + breeder,
    'cacciatori: ' + hunters,
]

let sentences = [
    'Non ci sono lontre nel mondo',
    'Sono comparse delle lontre nel mondo',
    'I primi esemplari ormai si stanno abituando all\'habitat lacustre...',
    'siamo arrivati all\'equivalente della popolazione italiana... e continuano ad aumentare! GRANDE!'
]

let archIds = [
    'archId0',
    'archId1',
    'archId2',
    'archId3',
    'archId4',
    'archId5',
    'archId6'
]

let archDesc = [
    'Hai terminato il gioco senza che alcuna lontra sia morta',
    'Hai superato la soglia di '+overKill+' lontre uccise',
    'hai terminato il gioco senza aver lasciato alcuna lontra viva nel mondo',
    'hai superato la soglia di '+ overPopolation +' lontre nel mondo',
    'hai impedito ai cacciatore di fare una strage',
    'hai terminato il gioco senza usare aiuti',
    'hai terminato il gioco aumentando il numero di lontre... ma a che prezzo?'
]

firstDescription();

function firstDescription() {
    createDiv('otter_img','',document.body);
    createDesc('OTTER GAME', 'title', document.body);
    
    for (let i = 0; i < explenation.length; i++) {
        createDiv('','box_rules',document.body);
        let pos = document.getElementsByClassName('box_rules')[i];
        createDesc(explenation[i],'p'+i,pos);
    }
    document.getElementById('p2').innerHTML += instaAri + ') in più sono una specie a rischio (fortunatamente non altissimo... per ora) e in forte competizione con l\'essere umano per quanto riguarda cibo e habitat. Spero che in primo luogo questo giochino ti possa far sorridere e, tra un click e l\'altro, ti possa far scoprire qualcosa in più su questo splendido animaletto.';
    createBtn('start','start',document.body);
    document.getElementById('start').addEventListener('click',startGame);
    
}

function startGame() {
    state = 1;
    // delete first page
    for (let i = 0; i < explenation.length; i++) {
        let a = document.getElementsByClassName('box_rules')[0];
        document.body.removeChild(a);
    }
    let b = document.getElementById('start');
    document.body.removeChild(b);
    let c = document.getElementById('title');
    let d = document.getElementById('otter_img');
    document.body.removeChild(c);
    document.body.removeChild(d);

    // create game page
    for (let i = 0; i < gameParts.length; i++) {
        createDiv(gameParts[i],'para',document.body);
    }

    let pos = document.getElementsByClassName('para');
    
    // part 1 number and buttons + and -
    createDiv('fixContainer','',pos[0]);
    let fixBox  = document.getElementById('fixContainer');
    createDiv('buttonsContainer','',fixBox);

    let btnPos = document.getElementById('buttonsContainer');

    createBtn('+','plus',btnPos);
    createBtn('-','minus',btnPos);
    createDesc(otters,'number',fixBox);
    
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');

    plus.addEventListener('click',add,false);
    minus.addEventListener('click',remove,false);
    
    // part 2 text messages
    createDesc(sentences[0],'',pos[1]);
}

function createBtn(name,id,position) {
    let btn = document.createElement('button');
    position.appendChild(btn); 
    btn.appendChild(document.createTextNode(name));
    if (id != '') {
        btn.setAttribute('id',id); 
    }
}

function createDesc(description,id,position) {
    let p = document.createElement('p');
        position.appendChild(p);
        p.appendChild(document.createTextNode(description));
    if (id != '') {
        p.setAttribute('id',id);  
    }
}

function createDiv(id_box,class_box,position) {
    let box = document.createElement('div');
    if (id_box != '') {
        box.id = id_box;  
    }
    if (class_box != '') {
        box.classList.add(class_box);
    }
    position.appendChild(box);
}

function createCard(nameBtn,idCard,idButton,desc) {
    let pos = document.getElementById('btnContainer');
    let card = document.createElement('div');
    pos.appendChild(card);
    card.classList.add("card");
    card.id = idCard;

    createBtn(nameBtn,idButton,card);
    createDesc(desc,'',card);
}

function add() {
    otters = otters + child;
    document.getElementById('number').innerHTML = otters; 
}

function remove() {
    if (otters > 0) {
        otters--;
        death++;
        document.getElementById('number').innerHTML = otters;
    }  
}

function moreChild() {
    upChild = false;
    child++;
    newChild = newChild * 5;
    let container = document.getElementById('btnContainer');
    let card = document.getElementById(idCards[0]);
    container.removeChild(card);
}

function addBreeder() {
    upBreeder = false;
    breeder++;
    newBreeder = newBreeder * 8;
    let container = document.getElementById('btnContainer');
    let card = document.getElementById(idCards[1]);
    container.removeChild(card);
}

function breeding() {
    otters = otters + breeder * 4;
    document.getElementById('number').innerHTML = otters;
}

function hunting() {
    if (otters > hunters * 10) {
        death = death + hunters * 10; 
    } else if (otters > 0) {
        death = death + otters;
    }
    otters = otters - hunters * 10;
}

function noHunting() {
    huntSeason = false;
    upHunting = false;
    time = 60;
    hunters = 0;
    let container = document.getElementById('btnContainer');
    let card = document.getElementById(idCards[2]);
    container.removeChild(card);
}

function hunterCounter() {
    if (time > 0) {
        time--;
        if (firstHunt == false) { 
            document.getElementById('huntDesc').innerHTML = 'divieto di caccia';
            document.getElementById('huntDesc').style.color = 'green';
        }

    } else {
        huntSeason = true;
        hunters = 1;
        if (firstHunt == true) {
            firstHunt = false;
            createDesc('I cacciatori sono entrati in azione','huntDesc',document.getElementById('txtContainer'));
            document.getElementById('huntDesc').style.color = 'red';
        } else {
            document.getElementById('huntDesc').innerHTML = 'I cacciatori sono entrati in azione';
            document.getElementById('huntDesc').style.color = 'red';
        }
        
    }  
}

function createAchievent(title,archDesc,archId) {
    let container = document.getElementById('archContainer');
    createDiv(archId,'arch',container);
    let box = document.getElementById(archId);
    createDiv('','titleContainer',box);
    let titleContainer = box.getElementsByClassName('titleContainer')[0];
    createDesc(title,'',titleContainer);
    createDesc(archDesc,'',box);
}

function reStart() {
    document.body.removeChild(document.getElementById('endGame'));
    state = 0;
    otters = 0;
    numberOfBtn = 1;
    matchNumber = 0; 
    newChild = 10;
    child = 1;
    breeder = 0;
    newBreeder = 50;
    hunters = 0;
    removeHuner = 10;
    time = 10;
    firstHunt = true;
    huntSeason = false;
    highRisk = 30;
    endgame = 30; 
    death = 0;
    upChild = false;
    upBreeder = false;
    upHunting = false;
    cardNumber = 0;
    overPopolation = 300;
    overKill = 250;

    firstDescription();
}

function final() {
    
    let finalDiv = document.createElement('div');
    document.body.appendChild(finalDiv);
    finalDiv.id = "endGame";
    let finalParas = [
        'GAME OVER',
        'Al mondo ora si trovano '  + otters + ' lontre',
        'Sono morte ' + death + ' lontre'
    ]
    let info = [
        '\"La lontra è una specie con areale eurasiatico (dalla penisola iberica sino al Giappone) e nordafricano (Marocco, Tunisia e Algeria). L\'attuale distribuzione in Europa è molto frammentaria e in diversi paesi (ad esempio Paesi Bassi, Liechtenstein, Svizzera) è ormai estinta mentre in altri (Italia, Francia, Belgio, Germania) è presente con popolazioni residue poco numerose e isolate. È in aumento in Svezia.\"',
        '\"La lontra vive solo in zone non antropizzate ed è molto sensibile all\'inquinamento. Inoltre è un\'ottima pescatrice che è entrata in competizione con l\'essere umano: questo significa che negli ultimi 2-3 secoli la convivenza non è stata per nulla facile, a discapito della lontra, che è stata molto cacciata durante il XX secolo anche per la sua pelliccia, usata per l\'abbigliamento femminile.\"',
        '\"In Italia nel 2009 è stato redatto un piano d\'azione Nazionale dal ministero dell\'ambiente per la conservazione della lontra. Due sono gli obiettivi: intende promuovere la conservazione di una specie - la lontra eurasiatica (Lutra lutra, L. 1758) -, a forte rischio di estinzione nel nostro Paese. Il secondo affronta il più vasto tema della conservazione di uno degli ecosistemi più minacciati in Europa, considerato che la lontra è considerata sia specie indicatrice della qualità ambientale degli ecosistemi d’acqua dolce, sia specie ombrello, la cui protezione favorisce cioè quella di altre specie che utilizzano gli habitat acquatici e ripariali\"'
    ]
    for (let i = 0; i < finalParas.length; i++) {
        createDesc(finalParas[i],'par'+i,finalDiv);
    }
    
    createDiv('archContainer','',finalDiv);
    if (death == 0) {
        createAchievent(archievements[0],archDesc[0],archIds[0]);
        let a = document.getElementById(archIds[0])
        a.getElementsByClassName('titleContainer')[0].style.backgroundColor = '#fcba03';
    }
    if (death > overKill) {
        createAchievent(archievements[1],archDesc[1],archIds[1]);
        let a = document.getElementById(archIds[1])
        a.getElementsByClassName('titleContainer')[0].style.backgroundColor = '#ff6038';
    }
    if (otters == 0) {
        createAchievent(archievements[2],archDesc[2],archIds[2]);
        let a = document.getElementById(archIds[2])
        a.getElementsByClassName('titleContainer')[0].style.backgroundColor = '#30db94';
    }
    if (otters > overPopolation) {
        createAchievent(archievements[3],archDesc[3],archIds[3]);
        let a = document.getElementById(archIds[3])
        a.getElementsByClassName('titleContainer')[0].style.backgroundColor = '#4ad5ff';
    }
    if (!huntSeason && otters > 0) {
        createAchievent(archievements[4],archDesc[4],archIds[4]);
        let a = document.getElementById(archIds[4])
        a.getElementsByClassName('titleContainer')[0].style.backgroundColor = '#f3a8ff';
    }
    if (breeder == 0 && child == 1 && hunters == 1 && otters > 0) {
        createAchievent(archievements[5],archDesc[5],archIds[5]);
        let a = document.getElementById(archIds[5])
        a.getElementsByClassName('titleContainer')[0].style.backgroundColor = '#ffd6a8';
    }
    if (otters > 0 && death > otters) {
        createAchievent(archievements[6],archDesc[6],archIds[6]);
        let a = document.getElementById(archIds[6])
        a.getElementsByClassName('titleContainer')[0].style.backgroundColor = '#dcabff';
    }

    createDesc(info[ Math.floor(Math.random() * info.length)],'info',finalDiv);
    let par = document.getElementsByTagName('p');
    par[0].style.fontWeight = '900';
    par[0].style.fontSize = '4rem';

    createBtn('Riprova','retry',finalDiv);
    let btnRetry = document.getElementById('retry');
    btnRetry.addEventListener('click',reStart)
    

}

function demon() {
    if (otters == 0) {
        document.getElementById('txtContainer').getElementsByTagName('p')[0].innerHTML = sentences[0];
    } else if (otters >= 1 && otters < 100) {
        document.getElementById('txtContainer').getElementsByTagName('p')[0].innerHTML = sentences[1];
    } else if (otters >= 100 && otters < 600) {
        document.getElementById('txtContainer').getElementsByTagName('p')[0].innerHTML = sentences[2];
    } else if (otters >= 600 && otters < 1200) {
        document.getElementById('txtContainer').getElementsByTagName('p')[0].innerHTML = sentences[3];
    }
   
    if (otters > newChild && upChild == false) {
        upChild = true;
        createCard(cards[0],idCards[0],idButtons[0],cardsDesc[0]);
        let btn = document.getElementById(idButtons[0]);
        btn.addEventListener('click',moreChild);
    }
    
    if (otters > newBreeder && upBreeder == false) {
        upBreeder = true;
        createCard(cards[1],idCards[1],idButtons[1],cardsDesc[1]);
        let btn = document.getElementById(idButtons[1]);
        btn.addEventListener('click',addBreeder);
    }
    
    if (otters < highRisk && huntSeason == true && upHunting == false) {
        upHunting = true;
        createCard(cards[2],idCards[2],idButtons[2],cardsDesc[2]);
        let btn = document.getElementById(idButtons[2]);
        btn.addEventListener('click',noHunting);
    }

    if (endgame > 0) {
        endgame--;
    } else {
        state = 2;
        document.body.removeChild(document.getElementById('numContainer'));
        document.body.removeChild(document.getElementById('txtContainer'));
        document.body.removeChild(document.getElementById('btnContainer'));

        final();  
    }
}

window.setInterval(function() {
    if (state == 1){
        breeding();
        hunterCounter();
        if (otters > 0) {
            hunting();   
        } 
        if (otters < 0) {
            otters = 0;   
        }
        demon();
    }
}, 1000)