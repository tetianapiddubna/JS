function saveUserChoice() {
    let userChoice = prompt("What do you choose? Type 0 for Rock, 1 for Paper, or 2 for Scissors.");

    if (userChoice != '0' && userChoice != '1' && userChoice != '2') {
        alert("Please fill in the correct option")
        return saveUserChoice();
    }

    return parseInt(userChoice);
}

function saveComputerChoice() {
    return Math.random() * 3;
}
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if ((userChoice === 0 && computerChoice === 2) ||
               (userChoice === 1 && computerChoice === 0) ||
               (userChoice === 2 && computerChoice === 1)) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }

  function playGame() {
    const userChoice = saveUserChoice();
    const computerChoice = saveComputerChoice();

    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`);

    const result = determineWinner(userChoice, computerChoice);
    alert(result);
  }
playGame();