// let weight = prompt("Enter your weight")
// let height = prompt("Enter your height")    


// let BMI = weight / (height * height)
// let roundDigit = Math.trunc(BMI) 

// alert(`Here is your BMI calculated ${roundDigit}`)
let age = prompt("Enter your age")
let ageInDays = (age - 90)*365
let ageInWeeks = (age - 90)*52
let ageInMonth = (age - 90)*12

console.log(`You have left in days ${ageInDays} , in weeks ${ageInWeeks}, in months ${ageInMonth}`);