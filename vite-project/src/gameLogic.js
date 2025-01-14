const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const outcomes = {
    rock: { rock: "draw", paper: "lose", scissors: "win" },
    paper: { rock: "win", paper: "draw", scissors: "lose" },
    scissors: { rock: "lose", paper: "win", scissors: "draw" },
};

function getResults(playerChoice, computerChoice) {
    return outcomes[playerChoice][computerChoice];
}

export { getComputerChoice, getResults };