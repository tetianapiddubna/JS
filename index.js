// let weight = prompt("Enter your weight")
// let height = prompt("Enter your height")    


// let BMI = weight / (height * height)
// let roundDigit = Math.trunc(BMI) 

// alert(`Here is your BMI calculated ${roundDigit}`)
// let age = prompt("Enter your age")
// let ageInDays = (age-90)*365
// let ageInWeeks = (age-90)*52
// let ageInMonth = (age-90)*12

// console.log(`You have left in days ${ageInDays} , in weeks ${ageInWeeks}, in months ${ageInMonth}`);
// let bill = Number(prompt("Welcome to the tip calculator. What was the total bill?"))
// let tip = Number(prompt("How much tip would you like to give? 10, 12, or 15"))
// let people = Number(prompt("How much people to split the bill?"))

// let tipPercent = tip / 100
// let totalTip = bill * tipPercent
// let total = totalTip + bill
// let totalPerPerson = total / people
// alert(`Each person should pay ${totalPerPerson}`)
//Checking for odd or even digit
// let enterDigit = prompt("Enter your digit here")
// if(enterDigit % 2 == 0)
// {
// console.log("This is even digit")
// }
// else {
//     console.log("This is odd")
// }
// let height = prompt("Enter your height in cm");
// let totalPrice = 0;

// if (height >= 120){
//     console.log("You can ride the rollercoaster!");
//     let age = prompt("Enter your age");
//     if (age >= 18){
//         totalPrice = 90;
//     } else if (age >= 12){
//        totalPrice = 70;
//     } else {
//        totalPrice = 50;
//     }
    
//     let photo = prompt("Do you want to buy a photo? type yes or no");
//     if (photo === "yes") {
//         if(age < 65){
//             totalPrice += 25
//         }
//     }
//     alert("Your current price is " + totalPrice + " kr")

// } else {
//     console.log("Sorry, you are too short!");
// }
// function extractYearFromDate(dateString) {

//     let limitInput = dateString.substring(0, 10);//Not sure if that is correct though?
//     if (limitInput.length !== 10) {
//         alert('Input must be exactly 10 characters long.');
//       }
//       else if (limitInput.length > 10){
//         alert('Input must be exactly 10 characters long.')
//       }

//     return dateString.substring(0, 4);
//   }
//   console.log(extractYearFromDate);
 
//   let dateExample = prompt("Enter your date in the following format YYYY-MM-DD");
//   let extractedYear = extractYearFromDate(dateExample);
//   console.log(`The year extracted is: ${extractedYear}`);
// function addition(x, y) {
//     return x + y;
//   }
  
//   function subtraction(x, y) {
//     return x - y;
//   }
  
//   function multiplication(x, y) {
//     return x * y;
//   }
  
//   function division(x, y) {
//     return x / y;
//   }
  
//   function calculation(operator, x, y) {
//     switch (operator) {
//       case "+":
//         return add(x, y);
//       case "-":
//         return subtract(x, y);
//       case "*":
//         return multiply(x, y);
//       case "/":
//         return divide(x, y);
//   }
// }
 
    // let operator = prompt("Enter an operator (+, -, *, /):");
    // let num1 = prompt("Enter the first number:");
    // let num2 = prompt("Enter the second number:");
  
    // Convert input to numbers and check if they are valid
    // num1 = parseFloat(num1);
    // num2 = parseFloat(num2);
  
    // if (isNaN(num1) || isNaN(num2)) {
    //   throw new Error("Invalid input. Please enter valid numbers.");
    // }
  
    // let result = calculate(operator, num1, num2);
    // console.log("Result + ", result);
//    let guestList = ["Alla", "Ola", "Tania", "Pasha", "Oksana", "Anna", "Andrew"];
//    let nameToCheck = "Alla";
//    if (guestList.includes(nameToCheck)){
//     console.log(`Welcome, ${nameToCheck}`)
//    }
//    else {
//     console.log(`Name is not there`)
//    }
// function getRandomName(names) {

//     let namesArray = names.split(', ');

//     let randomIndex = Math.floor(Math.random() * namesArray.length);

//     let selectedName = namesArray[randomIndex];

//     return selectedName;
// }


// let inputNames = prompt("Enter your names one after another");
// let selectedPerson = getRandomName(inputNames);
// console.log(`${selectedPerson} will pay for everybody's food bill.`);
// const names= ["Alaa", "Pasha", "Olha", "Anna", "Tania", "Andrew"]
// for (const name of names) {
//     console.log("Hello", name);
// }
// const Str = "Sweden"
// for (const char of Str) {
//     console.log(char);
// }
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
//             'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// let direction = prompt("Type 'encode' to encrypt, type 'decode' to decrypt: ")
// let text = prompt("Type your message: ").toLocaleLowerCase()
// let shift = prompt("Type the shift number: ")

// // To-do 1
// function encrypt(shift, text) {
//     // Define the alphabet
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//     // Convert text to lowercase
//     const lowercaseText = text.toLowerCase();

//     let encryptedText = '';

//     for (let i = 0; i < lowercaseText.length; i++) {
//         const currentChar = lowercaseText[i];

//         // Check if the character is a letter
//         const isLetter = /[a-z]/.test(currentChar);

//         if (isLetter) {
//             // Find the index of the current character in the alphabet
//             const currentIndex = alphabet.indexOf(currentChar);

//             // Calculate the shifted index
//             let shiftedIndex = (currentIndex + shift) % 26;
//             if (shiftedIndex < 0) {
//                 // Handle negative shifts
//                 shiftedIndex += 26;
//             }

//             // Add the encrypted character to the result
//             encryptedText += alphabet[shiftedIndex];
//         } else {
//             // If the character is not a letter, add it unchanged
//             encryptedText += currentChar;
//         }
//     }

//     console.log(`Encrypted text: ${encryptedText}`);
// }

// encrypt(shift, text);
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let direction = prompt("Type 'encode' to encrypt, type 'decode' to decrypt: ")
let text = prompt("Type your message: ").toLocaleLowerCase()
let shift = prompt("Type the shift number: ")
function encryptDecrypt(shift, text, direction) {
    // Define the alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // Convert text to lowercase
    const lowercaseText = text.toLowerCase();

    let result = '';

    for (let i = 0; i < lowercaseText.length; i++) {
        const currentChar = lowercaseText[i];

        // Check if the character is a letter
        const isLetter = /[a-z]/.test(currentChar);

        if (isLetter) {
            // Find the index of the current character in the alphabet
            const currentIndex = alphabet.indexOf(currentChar);

            // Calculate the shifted index based on direction
            let shiftedIndex;
            if (direction === 'encrypt') {
                shiftedIndex = (currentIndex + shift) % 26;
            } else if (direction === 'decrypt') {
                shiftedIndex = (currentIndex - shift) % 26;
                if (shiftedIndex < 0) {
                    // Handle negative shifted index
                    shiftedIndex += 26;
                }
            }

            // Add the encrypted/decrypted character to the result
            result += alphabet[shiftedIndex];
        } else {
            // If the character is not a letter, add it unchanged
            result += currentChar;
        }
    }

    return result;
}

if (direction === 'encrypt' || direction === 'decrypt') {
    const result = encryptDecrypt(shift, text, direction);
    console.log(`Result: ${result}`);
} else {
    console.log("Invalid direction. Please type 'encrypt' or 'decrypt'.");
}
