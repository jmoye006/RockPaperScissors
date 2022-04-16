 let choices = ['rock', 'paper', 'scissors'];
 let randomOption = choices[Math.floor(Math.random() * choices.length)]
 //computerSelection = computerPlay(randomOption);

function game(playRound) {
    for (let i = 1; i <= 5; i++) {
        playRound();
    }

    // console.log();
 }

function computerPlay(choices){
    return randomOption;
}
 
function playRound(computerPlay) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if(playerSelection === computerSelection) {
        console.log('Its a Tie!');
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Won! Rock beats Scissors!');
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You Lost, Scissors beats Paper');
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Won! Scissors beats Paper');
    }
    else if(playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You Lost, Paper beats Rock');
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Won! Paper beats Rock');
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You Lost, Rock beats Scissors');
    }
}




let computerSelection = computerPlay();
let playerSelection = prompt('Please Enter Your Choice');
//playRound(computerSelection, playerSelection);
game(computerSelection, playerSelection);