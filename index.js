function getComputerChoice() {
    const objects = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * objects.length);
    return objects[randomIndex];
}

function getHumanChoice() {
    let userInput = prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
    while (!['rock', 'paper', 'scissors'].includes(userInput)) {
        userInput = prompt('Invalid choice. Please enter rock, paper, or scissors:').toLowerCase();
    }
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
        return 'tie';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log('You win this round!');
        return 'human';
    } else {
        console.log('You lose this round!');
        return 'computer';
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === 'human') {
            humanScore++;
        } else if (roundResult === 'computer') {
            computerScore++;
        }

        console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log('\nGame Over!');
    if (humanScore > computerScore) {
        console.log('Congratulations! You won the game!');
    } else if (humanScore < computerScore) {
        console.log('Better luck next time! The computer won the game.');
    } else {
        console.log('It\'s a tie!');
    }
}

// Start the game
playGame();
