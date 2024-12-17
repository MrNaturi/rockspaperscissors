const playGame = () => {
let humanScore = 0;
let computerScore = 0;
let count = 0;

for (i = 1; i<=5 ; i++){
 
const playRound = () =>{
   
    const getHumanChoice = prompt("Choose between rock, paper and scissors")
    const getComputerChoice = ( ) => {
        const choices = ["rock", "paper", "scissors"]
        const answer = choices[Math.floor(Math.random() * 3)]
        return answer
        }
        const humanChoice = getHumanChoice;
        const computerChoice = getComputerChoice();
if(computerChoice === humanChoice){
    return "Tie"
}else if(computerChoice==="rock" && humanChoice === "scissors"){
    computerScore++
    return "Computer Wins"
}
else if(computerChoice==="scissors" && humanChoice === "paper"){
    computerScore++
    return "Computer Wins"
}
else if(computerChoice==="paper" && humanChoice === "rock"){
    computerScore++
    return "Computer Wins"
}
else if(humanChoice==="rock" && computerChoice === "scissors"){
    humanScore++
    return "Human Wins"
}
else if(humanChoice==="scissors" && computerChoice === "paper"){
    humanScore++
    return "Human Wins"
}
else if(humanChoice==="paper" && computerChoice === "rock"){
    humanScore++
    return "Human Wins"
}
}
console.log(playRound())
console.log(computerScore, humanScore)
count++
console.log(count)
if(count === 5){
    console.log(humanScore > computerScore ? `Player wins with a total score of ${humanScore}` : humanScore < computerScore ?`Computer wins with a total score of ${computerScore}`: "It's a tie")
}
}
}

playGame()