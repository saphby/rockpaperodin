let ranNum = Math.random()
function getComputerChoice() {    
    if (ranNum < 1/3) {        
        return "Rock"
    } else if (ranNum > 1/3 && ranNum < 2/3) {        
        return "Paper"
    } else if (ranNum > 2/3) {        
        return "Scissors"
    }    
} 
console.log(ranNum)
console.log(getComputerChoice())

