let weight = prompt("Enter your weight")
let height = prompt("Enter your height")    


let heightMeters = height / 100
let BMI = weight / height
let roundDigit = Math.trunc(BMI) 

alert(`Here is your ${roundDigit}`)