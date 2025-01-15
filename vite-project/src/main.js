import "./style.css"; 
import { getComputerChoice, getResults } from "./gameLogic";

const startScreen = document.getElementById("startscreen");
const startButton = document.getElementById("startbutton");
const scoreDisplay = document.getElementById("score");
const results = document.getElementById("results");
const result = document.getElementById("result");
const resultText = document.getElementById("resulttext");
const userChoiceDiv = document.getElementById("userchoice");
const computerChoiceDiv = document.getElementById("computerchoice");
const playAgainButton = document.getElementById("playagain");
const gameContainer = document.getElementById("gamecontainer");
const ruleButton = document.getElementById("rulebutton");
const closeButton = document.getElementById("closebutton");

let score = 0;

function gameStart() { 
    startScreen.classList.add("hidden");
    gameContainer.classList.remove("hidden");
}

startButton.addEventListener("click", gameStart);
ruleButton.addEventListener("click", () => {
    rules.classList.remove("hidden");
});
closeButton.addEventListener("click", () => {
    rules.classList.add("hidden");
});

const choiceButtons = document.querySelectorAll("button[data-choice]");

choiceButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const playerChoice = event.currentTarget.getAttribute("data-choice");
        const computerChoice = getComputerChoice();
        const result = getResults(playerChoice, computerChoice);

        updateUI(playerChoice, computerChoice, result);

    });
});

function updateUI(playerChoice, computerChoice, result) {
    userChoiceDiv.textContent = playerChoice;
    computerChoiceDiv.textContent = computerChoice;
    resultText.textContent = result;

    if (result === "win") {
        score++;
        resultText.textContent = "You win!";
        results.classList.remove("hidden");
        scoreDisplay.textContent = score;
    } else if (result === "lose") {
        score--;
        resultText.textContent = "You lose!";
        results.classList.remove("hidden");
        scoreDisplay.textContent = score;
    } else {
        resultText.textContent = "It's a draw!";
        results.classList.remove("hidden");
    }

    results.classList.remove("hidden");
    gameContainer.classList.add("hidden");
    
}

playAgainButton.addEventListener("click", () => {
    results.classList.add("hidden");
    gameContainer.classList.remove("hidden");

});