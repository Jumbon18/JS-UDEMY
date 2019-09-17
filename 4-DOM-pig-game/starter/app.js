/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
let scores,roundScores,activePlayer,dice,gamePlaying,tempscore;
let dices= document.querySelectorAll('.dice');

init();
dice=Math.floor((Math.random()*6)+1);
/*
document.querySelector('#current-'+activePlayer).textContent=dice;
*/


/*
document.querySelector('.btn-roll').addEventListener('click',(()=>{
if(gamePlaying){
    dice=Math.floor((Math.random()*6)+1);
    let diceDOM=  document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice + '.png';
    if(dice !== 1){
        roundScores+=dice;
        document.querySelector('#current-' +activePlayer).textContent=roundScores;
    }
    else{
        nextPlayer();
    }
}
}));
*/

document.querySelector('.btn-hold').addEventListener('click',(()=>{
   if(gamePlaying){
       scores[activePlayer]+=roundScores;

       document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
       let valueDice=document.getElementById('formScore').value;
       let winningScore;
     if(valueDice){
         winningScore=valueDice;
     }
     else{
         winningScore=100;
     }
       if(scores[activePlayer] >= winningScore){
           document.querySelector('#name-' + activePlayer).textContent='Winner!';

           for(let i=0; i<dices.length;i++) {
               dices[i].style.display = 'none';
           }
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           gamePlaying=false;
       }
       else {
           nextPlayer();
       }
   }

}));


function nextPlayer() {
    activePlayer===0 ? activePlayer=1 : activePlayer=0;
    roundScores=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    for(let i=0; i<dices.length;i++) {
        dices[i].style.display = 'none';
    }

}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
    roundScores=0;
    activePlayer=0;
    gamePlaying=true;
    for(let i=0; i<dices.length;i++) {
        dices[i].style.display = 'none';
    }
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}
// coding challenge 6 (1)

document.querySelector('.btn-roll').addEventListener('click',(()=>{
    if(gamePlaying){

     let   dice1=Math.floor((Math.random()*6)+1);
     let   dice2=Math.floor((Math.random()*6)+1);

        document.getElementById('dice-1').style.display='block';
        document.getElementById('dice-2').style.display='block';

        document.getElementById('dice-1').src='dice-'+dice1 + '.png';

        document.getElementById('dice-2').src='dice-'+dice2 + '.png';
       /* if((tempscore + dice)===12 ){
            nextPlayer();
        }
        else{
            tempscore=dice;
        }*/
        if(dice1!== 1 && dice2!==1){
            roundScores+=dice1 +dice2;
            document.querySelector('#current-' +activePlayer).textContent=roundScores;
        }
else{
    nextPlayer();
        }
    }
}));