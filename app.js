let playerScore = 0;
let computerScore = 0;

const startTheGame = () => 
{
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener('click',() =>
    {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    });
};

const updateScores = () => 
{
    const pScore = document.querySelector(".player-score p");
    pScore.textContent = playerScore;

    const cScore = document.querySelector(".computer-score p");
    cScore.textContent = computerScore;
};

const playMatch = () => 
{
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    let playerNumber = 0;

    const computerOptions = ["rock","paper","scissors"];

    hands.forEach((hand) =>
    {
        hand.addEventListener('animationend',function()
        {
            this.style.animation = "";
        });
    });

    options.forEach((option) => 
    {
        option.addEventListener("click", function()
        {
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            playerNumber = computerOptions.indexOf(this.textContent);

            compareHands(playerNumber,computerNumber);

            computerHand.src = `./assets/${computerChoice}.png`;
            playerHand.src = `./assets/${this.textContent}.png`;

            playerHand.style.animation = "shakePlayer 1s ease";
            computerHand.style.animation = "shakeComputer 1s ease";

            updateScores();
        });
    });
};

const compareHands = (playerNumber, computerNumber) => 
{
    const winner = document.querySelector(".winner");
    
    switch(computerNumber)
    {
        case 0:
            if(playerNumber == 1)
            {
                winner.textContent = "Player wins!";
                playerScore++;
            }
            else if(playerNumber == 0)
            {
                winner.textContent = "It's a tie!";
            }
            else
            {
                winner.textContent = "Computer wins!";
                computerScore++;
            }
            break;
        case 1:
            if(playerNumber == 2)
            {
                winner.textContent = "Player wins!";
                playerScore++;
            }
            else if(playerNumber == 1)
            {
                winner.textContent = "It's a tie!";
            }
            else
            {
                winner.textContent = "Computer wins!";
                computerScore++;
            }
            break;
        case 2:
            if(playerNumber == 0)
            {
                winner.textContent = "Player wins!";
                playerScore++;
            }
            else if(playerNumber == 2)
            {
                winner.textContent = "It's a tie!";
            }
            else
            {
                winner.textContent = "Computer wins!";
                computerScore++;
            }
            break;
    }
};

const game = () => 
{
    startTheGame();
    playMatch();
};

game();