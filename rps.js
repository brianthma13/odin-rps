// create a function for the computer to randomly return either 'Rock', 'Paper',
// or 'Scissors'

function computerPlay() {
    const items=['rock', 'paper', 'scissors'];
    const item=items[Math.floor(Math.random()*items.length)];
    return item;
}

//write a function that plays one round of RPS
//take 2 inputs: playerSelection and computerSelection
//return a string that declares the winner of the round

function playRound(playerSelection, computerSelection) {
    playerSelection=prompt("Rock, paper, scissors... shoot!","");
    // playerSelection=null;
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerPlay();
     if (playerSelection===computerSelection) {
        alert("It's a tie!");
    } else if (playerSelection==='rock' && computerSelection==='scissors' || 
    playerSelection==="paper" && computerSelection==="rock" || 
    playerSelection==="scissors" && computerSelection==="paper") {
        alert("You won!");
        return 'p';
    } else if (playerSelection==='scissors' && computerSelection==='rock' || 
    playerSelection==="rock" && computerSelection==="paper" || 
    playerSelection==="paper" && computerSelection==="scissors") {
        alert("You lost!");
        return 'c';
    } else {
        playerSelection=alert("You did not enter a valid item. Please enter Rock, Paper, or Scissors");
        playRound(playerSelection,computerSelection);
    }

}

function game() {
    alert("Let's play Rock, Paper, Scissors! Best of 5 wins");
    let computerScore = 0;
    let playerScore = 0;
    for (let i=0; ; i++) {  
        if (computerScore === 3) {
            alert("You lost the game. Final score: Player - " + playerScore+ "; Computer - " + computerScore);
            break;
        } else if (playerScore === 3) { 
            alert("You won the game! Final score: Player - " + playerScore+ "; Computer - " + computerScore);
            break; 
        } else { 
            result = playRound()
            if (result==='p') {
                playerScore++;
                console.log('Player = '+ playerScore +'; Computer = ' + computerScore)
            } else if (result==='c') {
                computerScore++;
                console.log('Player = '+ playerScore +'; Computer = ' + computerScore)
            } else {
                console.log('Player = '+ playerScore +'; Computer = ' + computerScore)
            }
        }

        }
        
}
