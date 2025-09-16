const computerChoiceParagraph = document.querySelector("#computerChoiceParagraph");
const computerScoreParagraph = document.querySelector("#computerScoreParagraph");
const humanChoiceParagraph = document.querySelector("#humanChoiceParagraph");
const humanScoreParagraph = document.querySelector("#humanScoreParagraph");
const roundWinnerParagraph = document.querySelector("#roundWinnerParagraph");
const overallWinnerParagraph = document.querySelector("#overallWinnerParagraph");
const OverallWinnerDiv = document.querySelector("#OverallWinnerDiv");
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");



humanScoreParagraph.textContent = 0;
computerScoreParagraph.textContent = 0;

let compChoice;
let humanChoice;
const disclaimer = "***...Refresh The Page To Play Another Round Again...***";



function getRockButton() {

    compChoice = Math.random();
    humanChoice = rockButton.textContent;
    humanChoiceParagraph.textContent = humanChoice;
    computerChoiceParagraph.textContent = compChoice;

    if (compChoice > 0 && compChoice <= 0.4) {
        computerChoiceParagraph.textContent = "ROCK";
    }
    else if (compChoice > 0.4 && compChoice <= 0.7) {
        computerChoiceParagraph.textContent = "PAPER";
    }
    else if (compChoice > 0.7 && compChoice <= 1) {
        computerChoiceParagraph.textContent = "SCISSORS";
    }
    else{
        return "Choice Not Valid...!!!";
    }


    if (humanChoiceParagraph.textContent === "ROCK" && computerChoiceParagraph.textContent === "SCISSORS") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }

    else if (humanChoiceParagraph.textContent === "SCISSORS" && computerChoiceParagraph.textContent === "PAPER") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }
    else if (humanChoiceParagraph.textContent === "PAPER" && computerChoiceParagraph.textContent === "ROCK") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }
    else if (humanChoiceParagraph.textContent === computerChoiceParagraph.textContent) {
        roundWinnerParagraph.textContent = "ITS A TIE..NO WINNER";
    }
    else if (humanChoiceParagraph.textContent === undefined || humanChoiceParagraph.textContent === "" || humanChoiceParagraph.textContent === null) {
        roundWinnerParagraph.textContent = "GAME CANCELLED\nSOMETHING WENT WRONG";
    }
    else{
        computerScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "COMPUTER WINS";
    }
    
    if (humanScoreParagraph.textContent === String(5)) {
        overallWinnerParagraph.textContent = "THE OVERALL WINNER IS YOU";
        let endRound = document.createElement("p");
        endRound.textContent = disclaimer;
        endRound.style.color = "red";
        endRound.style.textDecoration = "italics";
        OverallWinnerDiv.appendChild(endRound);
        rockButton.removeEventListener("click", getRockButton);
        paperButton.removeEventListener("click", getPaperButton);
        scissorsButton.removeEventListener("click", getScissorsButton);
        
    }
    if (computerScoreParagraph.textContent === String(5)) {
        overallWinnerParagraph.textContent = "THE OVERALL WINNER IS COMPUTER";
        let endRound = document.createElement("p");
        endRound.textContent = disclaimer;
        endRound.style.color = "red";
        endRound.style.textDecoration = "italics";
        OverallWinnerDiv.appendChild(endRound);
        rockButton.removeEventListener("click", getRockButton);
        paperButton.removeEventListener("click", getPaperButton);
        scissorsButton.removeEventListener("click", getScissorsButton);
    }
}





















function getPaperButton() {

    compChoice = Math.random();
    humanChoice = paperButton.textContent;
    humanChoiceParagraph.textContent = humanChoice;
    computerChoiceParagraph.textContent = compChoice;

    if (compChoice > 0 && compChoice <= 0.4) {
        computerChoiceParagraph.textContent = "ROCK";
    }
    else if (compChoice > 0.4 && compChoice <= 0.7) {
        computerChoiceParagraph.textContent = "PAPER";
    }
    else if (compChoice > 0.7 && compChoice <= 1) {
        computerChoiceParagraph.textContent = "SCISSORS";
    }
    else{
        return "Choice Not Valid...!!!";
    }


    if (humanChoiceParagraph.textContent === "ROCK" && computerChoiceParagraph.textContent === "SCISSORS") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }

    else if (humanChoiceParagraph.textContent === "SCISSORS" && computerChoiceParagraph.textContent === "PAPER") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }
    else if (humanChoiceParagraph.textContent === "PAPER" && computerChoiceParagraph.textContent === "ROCK") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }
    else if (humanChoiceParagraph.textContent === computerChoiceParagraph.textContent) {
        roundWinnerParagraph.textContent = "ITS A TIE..NO WINNER";
    }
    else if (humanChoiceParagraph.textContent === undefined || humanChoiceParagraph.textContent === "" || humanChoiceParagraph.textContent === null) {
        roundWinnerParagraph.textContent = "GAME CANCELLED\nSOMETHING WENT WRONG";
    }
    else{
        computerScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "COMPUTER WINS";
    }

    if (humanScoreParagraph.textContent === String(5)) {
        overallWinnerParagraph.textContent = "THE OVERALL WINNER IS YOU";
        let endRound = document.createElement("p");
        endRound.textContent = disclaimer;
        endRound.style.color = "red";
        endRound.style.textDecoration = "italics";
        OverallWinnerDiv.appendChild(endRound);
        rockButton.removeEventListener("click", getRockButton);
        paperButton.removeEventListener("click", getPaperButton);
        scissorsButton.removeEventListener("click", getScissorsButton);
        
    }
    if (computerScoreParagraph.textContent === String(5)) {
        overallWinnerParagraph.textContent = "THE OVERALL WINNER IS COMPUTER";
        let endRound = document.createElement("p");
        endRound.textContent = disclaimer;
        endRound.style.color = "red";
        endRound.style.textDecoration = "italics";
        OverallWinnerDiv.appendChild(endRound);
        rockButton.removeEventListener("click", getRockButton);
        paperButton.removeEventListener("click", getPaperButton);
        scissorsButton.removeEventListener("click", getScissorsButton);
    }
}





















function getScissorsButton() {

    compChoice = Math.random();
    humanChoice = scissorsButton.textContent;
    humanChoiceParagraph.textContent = humanChoice;
    computerChoiceParagraph.textContent = compChoice;

    if (compChoice > 0 && compChoice <= 0.4) {
        computerChoiceParagraph.textContent = "ROCK";
    }
    else if (compChoice > 0.4 && compChoice <= 0.7) {
        computerChoiceParagraph.textContent = "PAPER";
    }
    else if (compChoice > 0.7 && compChoice <= 1) {
        computerChoiceParagraph.textContent = "SCISSORS";
    }
    else{
        return "Choice Not Valid...!!!";
    }


    if (humanChoiceParagraph.textContent === "ROCK" && computerChoiceParagraph.textContent === "SCISSORS") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }

    else if (humanChoiceParagraph.textContent === "SCISSORS" && computerChoiceParagraph.textContent === "PAPER") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }
    else if (humanChoiceParagraph.textContent === "PAPER" && computerChoiceParagraph.textContent === "ROCK") {
        humanScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "YOU WIN";
    }
    else if (humanChoiceParagraph.textContent === computerChoiceParagraph.textContent) {
        roundWinnerParagraph.textContent = "ITS A TIE..NO WINNER";
    }
    else if (humanChoiceParagraph.textContent === undefined || humanChoiceParagraph.textContent === "" || humanChoiceParagraph.textContent === null) {
        roundWinnerParagraph.textContent = "GAME CANCELLED\nSOMETHING WENT WRONG";
    }
    else{
        computerScoreParagraph.textContent++;
        roundWinnerParagraph.textContent = "COMPUTER WINS";
    }

    if (humanScoreParagraph.textContent === String(5)) {
        overallWinnerParagraph.textContent = "THE OVERALL WINNER IS YOU";
        let endRound = document.createElement("p");
        endRound.textContent = disclaimer;
        endRound.style.color = "red";
        endRound.style.textDecoration = "italics";
        OverallWinnerDiv.appendChild(endRound);
        rockButton.removeEventListener("click", getRockButton);
        paperButton.removeEventListener("click", getPaperButton);
        scissorsButton.removeEventListener("click", getScissorsButton);
        
    }
    if (computerScoreParagraph.textContent === String(5)) {
        overallWinnerParagraph.textContent = "THE OVERALL WINNER IS COMPUTER";
        let endRound = document.createElement("p");
        endRound.textContent = disclaimer;
        endRound.style.color = "red";
        endRound.style.textDecoration = "italics";
        OverallWinnerDiv.appendChild(endRound);
        rockButton.removeEventListener("click", getRockButton);
        paperButton.removeEventListener("click", getPaperButton);
        scissorsButton.removeEventListener("click", getScissorsButton);
    }
}

rockButton.addEventListener("click", getRockButton);
paperButton.addEventListener("click", getPaperButton);
scissorsButton.addEventListener("click", getScissorsButton);