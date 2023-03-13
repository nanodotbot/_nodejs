let secretValue = Math.floor(1+Math.random()*10).toString();
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const checkNumber = (input) => {
    if (input === 'quit') {
        process.stdout.write('byebye');
        process.exit();
    }
    if (!numbers.includes(input)) {
        process.stdout.write('number must be one from 1 through 10')
    } else if (input === secretValue) {
        process.stdout.write('rock n roll');
        process.exit();
    } else {
        process.stdout.write('guess again');
    }
};

process.stdout.write('enter a number from 1 through 10');

const playGame = (userInput) => {
    const input = userInput.toString().trim();
    checkNumber(input);
}

process.stdin.on('data', playGame);