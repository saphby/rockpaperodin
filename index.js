const ranNum = Math.random()
function getComputerChoice() {    
    if (ranNum < 1/3) {        
        return "Rock"
    } else if (ranNum > 1/3 && ranNum < 2/3) {        
        return "Paper"
    } else if (ranNum > 2/3) {        
        return "Scissors"
    }    
} 


function getHumanChoice() {
    return prompt(`Rock, Paper, or Scissors?`)
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    humanChoice = humanSelection.toLowerCase();
   if ((humanChoice == `rock`) && (computerChoice == `Scissors`)) {
       humanScore++
       console.log(`You Win! Rock Obliterates Scissors`)
   } else if ((humanChoice == `scissors`) && (computerChoice == `Rock`)) {
       computerScore ++
       console.log(`You Lose! Rock Obliterates Scissors`)
   }
   
   if ((humanChoice == `paper`) && (computerChoice == `Rock`)) {
       humanScore++
       console.log(`You Win! Paper literally suffocates Rock`)
   } else if ((humanChoice == `rock`) && (computerChoice == `Paper`)) {
       computerScore ++
       console.log(`You Lose! Paper literally suffocates Rock`)
   }
   
   if ((humanChoice == `scissors`) && (computerChoice == `Paper`)) {
       humanScore++
       console.log(`You Win! Scissors slices Paper mercilessly`)
   } else if ((humanChoice == `paper`) && (computerChoice == `Scissors`)) {
       computerScore ++
       console.log(`You Lose! Scissors slices Paper mercilessly`)
   }
   checkDraw();
   }
   
   function checkDraw() {
       getHumanChoice = humanSelection.toLowerCase();
       getComputerChoice = computerSelection.toLowerCase();
       if (getHumanChoice == getComputerChoice) {
           console.log(`It is a draw, you suck`)
       }
   }
   
   const humanSelection = getHumanChoice()
   const computerSelection = getComputerChoice()
   
   playRound(humanSelection, computerSelection)
   
