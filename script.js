var wantsToPlay = true; // for future
function randomIntFromInterval(min, max) { // min and max included
    //got from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
  return Math.floor(Math.random() * (max - min + 1) + min)
}


while (wantsToPlay) {
    var wantsToRoll = true;
    var computerPlays = true;
    var playerScore = 0;
    var computerScore = 0;
    while (wantsToRoll) {
        
        var num = randomIntFromInterval(1,6);
        playerScore += num
        document.write(`you rolled a ${num}<br>your score: ${playerScore}<br>`)
        if (playerScore > 15) {
            computerPlays = false;
            alert(`you rolled a ${num}\nyour score: ${playerScore}\nYOU ARE OVER 15 POINTS`)
            break
        }

        wantsToRoll = confirm(`you rolled a ${num}\nyour score: ${playerScore}\ndo you want to roll?`)
    }
    while (computerPlays) {
        var num = randomIntFromInterval(1,6);
        computerScore += num
        document.write(`the computer rolled a ${num}<br>computer score: ${computerScore}<br>`)

        if (computerScore > 15) {
            computerPlays = false;
            alert(`COMPUTER IS OVER 15 POINTS, YOU WIN!!`)
            break
        } else if (computerScore > playerScore) {
            computerPlays = false;
            alert(`the computer stoped at ${computerScore}`)
            break
        }


        
    }

    wantsToPlay = false // for future
}