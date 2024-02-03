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
let enterDigit = prompt("Enter your digit here")
if(enterDigit % 2 == 0)
{
console.log("This is even digit")
}
else {
    console.log("This is odd")
}