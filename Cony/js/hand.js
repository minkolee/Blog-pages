let scores, roundScore, activePlayer, dice;
let player0Panel = document.querySelector('.player-0-panel');
let player1Panel = document.querySelector('.player-1-panel');
let player0Score = document.getElementById("score-0");
let player1Score = document.getElementById("score-1");
let newGame = document.querySelector(".btn-new");
let rollDice = document.querySelector(".btn-roll");
let holdDice = document.querySelector(".btn-hold");
let dicePic = document.querySelector("img");
let player0CurrentScore = document.getElementById("current-0");
let player1CurrentScore = document.getElementById("current-1");
let player0 = document.getElementById("name-0");
let player1 = document.getElementById("name-1");


function initialize() {
    scores = [0, 0];
    roundScore = [0, 0];
    activePlayer = 0;
    player0Panel.classList.add("active");
    player1Panel.classList.remove("active");
    player0Score.textContent = "0";
    player1Score.textContent = "0";
    player0CurrentScore.textContent="0";
    player1CurrentScore.textContent="0";
    player0.textContent="Player 1";
    player1.textContent="Player 2";
    rollDice.removeEventListener('click', rollHandler);
    holdDice.removeEventListener('click',holdHandler);
    rollDice.addEventListener('click', rollHandler);
    holdDice.addEventListener('click',holdHandler);
}

function rollHandler() {
    if (activePlayer === 0) {
        let newDice = Math.floor(Math.random() * 6) + 1;
        dicePic.src = "dice-" + newDice + ".png";
        let currentTotalScore = parseInt(player0CurrentScore.textContent);
        if (newDice !== 1) {
            currentTotalScore = currentTotalScore + newDice;
            player0CurrentScore.textContent = currentTotalScore.toString();
        } else {
            player0CurrentScore.textContent = "0";
        }

    }
    if (activePlayer === 1) {
        let newDice = Math.floor(Math.random() * 6) + 1;
        dicePic.src = "dice-" + newDice + ".png";
        let currentTotalScore = parseInt(player1CurrentScore.textContent);
        if (newDice !== 1) {
            currentTotalScore = currentTotalScore + newDice;
            player1CurrentScore.textContent = currentTotalScore.toString();
        } else {
            player1CurrentScore.textContent = "0";
        }

    }
}

function holdHandler() {
    if(activePlayer===0){
        let currentTotalScore = parseInt(player0CurrentScore.textContent);
        console.log(currentTotalScore);
        scores[activePlayer] = scores[activePlayer] +=currentTotalScore;
        player0Score.textContent = scores[activePlayer];
        player0CurrentScore.textContent="0";
        if(isDefinite(scores)){
            return;
        }
        player0Panel.classList.remove("active");
        player1Panel.classList.add("active");
        activePlayer = 1;
    }

    else{
        let currentTotalScore = parseInt(player1CurrentScore.textContent);
        scores[activePlayer] = scores[activePlayer] +=currentTotalScore;
        player1Score.textContent = scores[activePlayer];
        player1CurrentScore.textContent="0";
        if(isDefinite(scores)){
            return;
        }
        activePlayer = 0;
        player1Panel.classList.remove("active");
        player0Panel.classList.add("active");
    }
}

function isDefinite(scores) {
    if(scores[activePlayer]>=100){
        let id = "name-"+activePlayer;
        document.getElementById(id).textContent = "WINNER";
        rollDice.removeEventListener('click', rollHandler);
        holdDice.removeEventListener('click',holdHandler);
        return true;
    }
    return false;
}

initialize();
newGame.addEventListener('click', initialize);