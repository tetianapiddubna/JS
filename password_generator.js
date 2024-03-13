let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+'];

function generateRandomPassword(lettersCount, numbersCount, symbolsCount) {
    let password = '';

    for (let i = 0; i < lettersCount; i++) {
        password += getRandomElement(letters);
    }

    for (let i = 0; i < numbersCount; i++) {
        password += getRandomElement(numbers);
    }

    for (let i = 0; i < symbolsCount; i++) {
        password += getRandomElement(symbols);
    }

    return password;
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let lettersEntered = prompt("How many letters do you want to have in your password?");
let numbersEntered = prompt("How many numbers do you want to have in your password?");
let symbolsEntered = prompt("How many symbols do you want to have in your password?");

let randomPassword = generateRandomPassword(Number(lettersEntered), Number(numbersEntered), Number(symbolsEntered));
console.log(randomPassword);


