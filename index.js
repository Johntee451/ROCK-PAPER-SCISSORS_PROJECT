function playGame() {


    let humanScore = 0;
    let computerScore = 0;

    
    for (let i = 1; i <= 5; i++) {

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
                return alert("Number Not Valid...!!!\nChoose Between [1][2][3]");
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
            else if (humanChos === undefined) {
                return "GAME CANCELLED\nUSER SHOULD ENTER VALID NUMBER BETWEEN [1][2][3]"
            }
            else{
                computerScore++;
                return "COMPUTER WINS"
            }

        }


        function getScoreUpdate() {
            return "Your Score is: " + humanScore + "\nComputer Score is: " + computerScore;
        }


        console.log("\n\nYOU CHOOSE: " + getHumanChoice());
        console.log("COMPUTER CH0OSES: " + getComputerChoice());
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log(getScoreUpdate());

    }

    
    function getComputerGameScore(){
        return computerScore;
    }

    function getHumanGameScore(){
        return humanScore;
    }

    
    function getTotalGameScore(HumanGameScore, ComputerGameScore) {

        if (HumanGameScore > ComputerGameScore) {
            return(
                "\nOVERALL WINNER IS YOU WITH " + humanScore + " POINTS" +
                "\nFIRST RUNNER UP IS COMPUTER WITH " + computerScore + " POINTS"
            );
        }
        else if (HumanGameScore < ComputerGameScore) {
            return(
                "\nOVERALL WINNER IS COMPUTER WITH " + computerScore + " POINTS" +
                "\nFIRST RUNNER UP IS YOU WITH " + humanScore + " POINTS"
            );
        }
        else {
            return "\nNO OVERALL WINNER AND NO FIRST RUNNER UP";
        }
        
    }
    

    console.log("\n\n\n\n\nYour final score: " + getHumanGameScore());
    console.log("Computer final score: " + getComputerGameScore());
    console.log(getTotalGameScore(getHumanGameScore(), getComputerGameScore()));

}

console.log(playGame());