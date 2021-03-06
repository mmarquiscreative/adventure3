
// toggle ids and classes mentioned in array
function toggleHide(someArray) {
    for (i = 0, j = someArray.length; i < j; i++) {
        document.querySelector(someArray[i]).classList.toggle('hide');
        console.log(someArray[i]);
    }
}
var GameCharacter = function(attack, health, stamina, potion, attackName, spellLvl, spellName){
    this.attack = attack;
    this.health = health;
    this.stamina = stamina;
    this.potion = potion;
    this.attackName = attackName;
    this.spell = spellLvl;
    this.spellName = spellName;
};

var adventurer = new GameCharacter(0, 60, 60, 2);
var orc = new GameCharacter(15, 60, 60, 2, 1, 'Crude Club', 'Simple Charm: ', 'Phlegm');
var orcPair = new GameCharacter(30, 120, 60, 2, 2, 'Brutal Mace', 'Intermediate Hex: ','Tango for Two');
var troll = new GameCharacter(60, 300, 300, 1, 3, 'Skull-Encrusted Hammer', 'Super Incredible Encantation: ', 'Abyssmal Pressure');
var dragon = new GameCharacter(120, 60, 60, 2, 4, 'Jeweled Claws', 'Dragon-God Conjuration: ', 'Magma-jestic Battle Fire');

var leviathan = new GameCharacter(250, 1000, 1000, 10, 6, 'Maw of Man-sized Teeth', 'Ultimate Boss-Level Magic Cast: ', 'Super Soaker');



//Other Variables
var kingdomName = 'Kregon'
var weapon = 'Sword';
var gem = ['ruby', 'saphire', 'emerald'];
var weaponStrength = [15, 20, 20, 20, 25, 25, 25, 30];
var potionStrength = 20;
var superPotionStrength = 40;
var orcAttackOptions = [5, 10, 10, 10, 15, 15, 15, 20];
var orcHealthOptions = [20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40];

var storyBoxDelay = 0;
var yesNo;
var textInput;

function testFunction() {
    console.log('testFunction tested');
}
function modifyElement (id, buttonValue){
    document.getElementById(id).textContent= buttonValue;
}
// Toggle choice box
function toggleChoiceBox() {
    document.querySelector('.choiceBox').classList.toggle('hide');
};

// Toggle multi-choice box
function toggleMultiBox() {
    document.querySelector('.multiChoiceBox').classList.toggle('hide');
};

// Toggle battle mode
function toggleBattleMode() {
    document.querySelector('.battleLoop').classList.toggle('hide');
};

// Toggle Response boxes
function toggleResponseBox() {
   document.getElementById('response').classList.toggle('hide');
};

// Toggle yes/no buttons
function toggleYesNo() {
    document.getElementById('yesNo').classList.toggle('hide');
};

// modifyButton
function modifyButton (id, buttonValue, buttonFunc, newId){
    document.getElementById(id).value= buttonValue;
    document.getElementById(id).setAttribute('onclick', buttonFunc);
    document.getElementById(id).id= newId;
    console.log(id + buttonValue + buttonFunc + newId);
};

// modifyButtonFunction
function modifyButtonFunc (id, buttonFunc){
    document.getElementById(id).setAttribute('onclick', buttonFunc);
};

// update STory Header
function modifyStoryHead(text){
    document.querySelector('#storyBoxHeadCh').innerHTML = text;
};

// update Story Paragraph
function modifyStoryPar(text){
    console.log(text);
    document.querySelector('#storyBoxParCh').innerHTML=text;
};

function modifyBattlePar(text){
    console.log(text);
    document.querySelector('#battleBoxPar').innerHTML=text;
};
function modifyHeroStat(){
    document.querySelector('#heroStatsData').innerHTML="Health " + adventurer.health + " — " + "Potions: " + adventurer.potion;
};

function modifyEnemyStat(enemyhealth, enemypotion){
    document.querySelector('#enemyStatsData').innerHTML="Health " + enemyhealth + " — " + "Potions: " + enemypotion;
};
// update Story Question
function modifyStoryQuestion(text) {
    document.querySelector('#storyQuestionCh').textContent = text;
};





var sequenceArray0n1 = ['#begin', '.choiceBox', '#yesNo', '#storyQuestionCh'];




//0n1//////////////////////
function sequence0n1 (){
    
    toggleHide(sequenceArray0n1);
    var x = 'Ch';
    console.log("began sequence0n1");
   // document.getElementById('begin').classList.toggle('hide');
    modifyButtonFunc('yes', 'sequence0n2 ()');
    modifyButtonFunc('no', 'sequence0n1 ()');
    modifyStoryHead('Welcome to Sunny Kregon.');
    modifyStoryPar('Welcome, hero. Our great land is in peril. We have been overrun with Orcs and need your help!');
    modifyStoryQuestion('Will you help us?');
    console.log("finished sequence0n1");
};

function getTextInput(){

   var x = document.querySelector('#textInput').value;
    console.log(x);
  
}


//0n2//////////////////////
function sequence0n2(){
    toggleHide(sequenceArray0n1);

    var sequenceArray0n2 = ['#begin', '#response', '.choiceBox', '#storyQuestionCh'];
    toggleHide(sequenceArray0n2);
    modifyStoryHead('Excellent!');
    modifyStoryPar('We are most gracious! To help you on this quest you may select a weapon of your choice!');
    modifyStoryQuestion('Would you like a sword, axe, mace, bow or something else?');
    
}
    
var sequenceArray0n3 = ['#response', '#storyQuestionCh', '#nextCh'];

//0n3//////////////////////
function sequence0n3() {
    toggleHide(sequenceArray0n3);
     weapon = document.querySelector('#textInput').value;
    console.log(weapon);
    switch (weapon) {
            case 'sword':
                modifyStoryHead('That is the sharpest sword in all the land!');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                modifyStoryPar('Hero attack now ' + adventurer.attack);
                break;
            case 'axe':
                modifyStoryHead('That axe will help you tear throw a lot of Orcs. Use it wisely.');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                modifyStoryPar('Hero attack now ' + adventurer.attack);
                break;
            case 'mace':
                modifyStoryHead('That mace is a favorite of our blacksmith. Good for smashing Orcs');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                modifyStoryPar('Hero attack now ' + adventurer.attack);
                break;
            case 'bow':
                modifyStoryHead('Ah the nimble bow. You plan on taking down Orcs from afar!');
                adventurer.attack = adventurer.attack + weaponStrength[Math.floor(Math.random () * weaponStrength.length)];
                modifyStoryPar('Hero attack now ' + adventurer.attack);
                break;
            case 'excalibur':
                modifyStoryHead('How... how did you know we had Excalibur? That was supposed to be a secret. Very well, you may take Excalibur on your quest.');
                adventurer.attack = adventurer.attack + 100;
                modifyStoryPar('Hero attack now ' + adventurer.attack);
                break;
            default:
                modifyStoryHead('Err. I\'m not sure why you would want to use that as your weapon, but hey, you do you.');
                adventurer.attack = adventurer.attack + 5;
                modifyStoryPar('Hero attack now ' + adventurer.attack);
                                 } //End Weapon Select
        modifyStoryPar('We are so happy for you to be helping us. I know that it is a long and dangerous road ahead.')
   
}



//1n1//////////////////////

var sequenceArray1n1 = ['#nextCh', '#crap'];
function sequence1n1 () {
    toggleHide(sequenceArray1n1);
    modifyStoryHead('With new weapon in hand you set out on your quest.');
    modifyStoryPar('After an hour of travel you arrive at the base of the Black Mountains. Proceeding with caution you begin climbing toward a small cave on the mountain side. Half way to the cave you hear a small rockslide to your left. You turn just in time to dodge an incoming arrow. <br/><br/>An orc comes barreling toward you.');
}
    
function flickerBlink(effectClass, howMany){
    var counter = 0;
    var flicker = setInterval(function(){
    counter++;
    console.log("Counter is at" + counter);
        console.log(effectClass);
    document.querySelector('.effectContainer').classList.toggle("'" + effectClass + "'");
    console.log('enemyFlicker On');
    if (counter > howMany) {
        clearInterval(flicker);
        console.log("Clear Interval Passed");
        }
    }, 40);
}

    
//1n2//////////////////////
document.querySelector('#attack').addEventListener('click', attackDamage('Orc', 'Adventurer'));
document.querySelector('#attack').addEventListener('click', toggleEffect, 'effectFire');

document.querySelector('#defend').addEventListener('click', toggleEffect, 'effectOther');

document.querySelector('#potion').addEventListener('click', toggleEffect, 'effectPotion');

function toggleEffect(effectName) {
    console.log(effectName);
flickerBlink(effectName, 16);
setTimeout(flickerBlink, 1800, effectName, 8)

}

/*function effectFire() {
document.querySelector('.effectContainer').classList.toggleEffect('effectFire');
    console.log('ranEffectFire');
} */

var sequenceArray1n2 = ['.battleLoop', '.choiceBox', '#crap'];
function sequence1n2 () {
    toggleHide(sequenceArray1n2);
    
    
}

function attackDamage(damageTarget, damageSource) {
    if (damageTarget !== 'Adventurer') {
        modifyBattlePar('You attack with your ' + weapon + ' dealing ' + adventurer.attack + ' damage!');
        console.log
    switch(damageTarget) {
        case 'Orc': 
            orc.health -= adventurer.attack;
            modifyEnemyStat(orc.health, orc.potion);
            
            break;
        case 'Orc Pair': 
            orcPair.health -= adventurer.attack;
            console.log('The Orc Pair has ' + orcPair.health + ' health points left.');
            console.log('The Orc Pair has ' + orcPair.stamina + ' stamina points left.');
            console.log('The Orc Pair has ' + orcPair.potion + ' potions left.');
            break;
        case 'Troll': 
            troll.health -= adventurer.attack;
            console.log('The Troll has ' + troll.health + ' health points left.');
            console.log('The Troll has ' + troll.stamina + ' stamina points left.');
            console.log('The Troll has ' + troll.potion + ' potions left.');
            break;
        case 'Dragon': 
            dragon.health -= adventurer.attack;
            console.log('The Dragon has ' + dragon.health + ' health points left.');
            console.log('The Dragon has ' + dragon.stamina + ' stamina points left.');
            console.log('The Dragon has ' + dragon.potion + ' potions left.');
            break;
        case 'Leviathan': 
            leviathan.health -= adventurer.attack;
            console.log('The Leviathan has ' + leviathan.health + ' health points left.');
            console.log('The Leviathan has ' + leviathan.stamina + ' stamina points left.');
            console.log('The Leviathan has ' + leviathan.potion + ' potions left.');
            break;
        default: 
            
    }
    } else if (damageTarget === 'Adventurer'){
            switch(damageSource) {
        case 'Orc': 
            modifyBattlePar('You are attacked by the ' + damageSource + 'It attacked with a ' + orc.attackName + ' dealing ' + orc.attack + ' damage!');
            adventurer.health -= orc.attack;
            modifyHeroStat(adventurer.health, adventurer.potion);
                    
            break;
        case 'Orc Pair': 
            alert('You are attacked by the ' + damageSource + 'They attacked with a ' + orc.attackName + ' dealing ' + orcPair.attack + ' damage!');
            adventurer.health -= orcPair.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        case 'Troll': 
            alert('You are attacked by the ' + damageSource + 'It attacked with a ' + orc.attackName + ' dealing ' + troll.attack + ' damage!');
            adventurer.health -= troll.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        case 'Dragon': 
            alert('You are attacked by the ' + damageSource + 'It attacked with its ' + dragon.attackName + ' dealing ' + adventurer.attack + ' damage!');
            adventurer.health -= dragon.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        case 'Leviathan': 
            alert('You are attacked by the ' + damageSource + 'It attacked with its ' + leviathan.attackName + ' dealing ' + leviathan.attack + ' damage!');
            adventurer.health -= leviathan.attack;
            console.log('You have ' + adventurer.health + ' health points left.');
            console.log('You have ' + adventurer.stamina + ' health points left.');
            console.log('You have ' + adventurer.potion + ' health points left.');
            break;
        default: 
            console.log('Something for attackDamage didn\'t work' + 'damageSource submitted was: ' + damageSource);
    } 
    }else {
        console.log('input not correct. damageTarget submitted was: ' + damageTarget + ' damageSource submitted was: ' + damageSource);
    }
};
   // orcBattle ();
   // sequenceTwo ();

    //// sequence1
// sequence1n1: walking when orcs attack
// sequence1n2: orc battle
// sequence1n3: victory see cave

//// sequence2
// sequence2n1: enter cave, go left or right?
// sequence2n2: right = sequence3
// sequence2n3: left: closed door, open or turn around?
    // turn around = sequence3n1:
// sequence2n4: open door, orc battle
// sequence2n5: victory, choose prize

//// sequence3
// sequence3n1: head other way

function gameOver() {
    alert('You fall to your knees. The last breath fades from your body as all fades to black.');
    alert('You have died.');
    throw new Error('GAME OVER!');
}

function getTextInput() {
                console.log('started getTextInput')
    textInput = document.getElementById('textInput').value;
    document.getElementById('response').classList.toggle = 'hide';
                console.log("finished getTextInput");

    //pauseScript === false;
}
