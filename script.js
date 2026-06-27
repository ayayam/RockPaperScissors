function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice = ""

    if (randomNumber === 0) {
        computerChoice = "rock"
    } 
    if (randomNumber === 1) {
        computerChoice = "paper"
    } 
    if (randomNumber === 2) {
        computerChoice = "scissors"
    }

    return computerChoice;
}
// console.log("Computer chooses: " + getComputerChoice())

function getHumanChoice() {
    return prompt("Rock, paper or scissors?")
}
// console.log("You chose: " + getHumanChoice())



function playGame() {
    let humanScore = 0
    let computerScore = 0
    

    function playRound(humanChoice, computerChoice) {
        let lcHumanChoice = humanChoice.toLowerCase()
        if (lcHumanChoice === computerChoice) {
            console.log("You tied! Both of you chose " + computerChoice)
            return;
        } else if ((lcHumanChoice === "rock" && computerChoice === "paper") ||
                (lcHumanChoice === "paper" && computerChoice === "scissors") ||
                (lcHumanChoice === "scissors" && computerChoice === "rock")) {
            console.log("Computer wins! " + computerChoice + " beats " + lcHumanChoice)
            computerScore++;
            return;
        } else if ((lcHumanChoice === "rock" && computerChoice === "scissors") ||
                (lcHumanChoice === "paper" && computerChoice === "rock") ||
                (lcHumanChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win! " + lcHumanChoice + " beats " + computerChoice)
            humanScore++;
            return;
        }
    }


    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (computerScore > humanScore) {
        console.log("Computer wins " + computerScore + " to " + humanScore + "!")
    } else if (computerScore < humanScore) {
        console.log("You win " + humanScore + " to " + computerScore + "!")
    } else {
        console.log("It's a tie!")
    }
}

console.log(playGame())

