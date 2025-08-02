function playGame() {

    
    for (let i = 1; i <= 5; i++) {


        let humanScore = 0;
        let computerScore = 0

        let compChoice = Math.random();
        let humanChoice = parseInt(prompt("chose '1' for ROCK\nchose '2' for PAPER\nchose '3' for SCISSORS"));


        function getHumanChoice(){

            if (humanChoice === 1) {
                return "ROCK";
            }
            else if (humanChoice === 2) {
                return "PAPER";
            }
            else if (humanChoice === 3) {
                return "SCISSORS";
            }
            else{
                return "Number Not Valid...!!!\nChoose Between [1][2][3]";
            }
        }


        function getComputerChoice(){

            if (compChoice > 0 && compChoice <= 0.4) {
                return "ROCK";
            }
            else if (compChoice > 0.4 && compChoice <= 0.7) {
                return "PAPER";
            }
            else if (compChoice > 0.7 && compChoice <= 1) {
                return "SCISSORS";
            }
            else{
                return "Number Not Valid...!!!";
            }
        }

        
        function playRound(humanChos, computerChoice) {

            if (humanChos === "ROCK" && computerChoice === "SCISSORS") {
                humanScore++;
                return "YOU WIN"
            }

            else if (humanChos === "SCISSORS" && computerChoice === "PAPER") {
                humanScore++;
                return "YOU WIN"
            }
            else if (humanChos === "PAPER" && computerChoice === "ROCK") {
                humanScore++;
                return "YOU WIN"
            }
            else if (humanChos === computerChoice) {
                return "ITS A TIE..NO WINNER"
            }
            else{
                computerScore++;
                return "COMPUTER WINS"
            }
        }

        function gameScore() {
            return "Computer score is: " + humanScore + "\nYour score is: " + computerScore;
        }


        console.log("COMPUTER CH0OSES: " + getComputerChoice());
        console.log("YOU CHOOSE: " + getHumanChoice());

        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log(gameScore());
    }
}
console.log(playGame());