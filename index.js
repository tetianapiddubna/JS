let weight = prompt("Enter your weight")
let height = prompt("Enter your height")    


let BMI = weight / (height * height)
let roundDigit = Math.trunc(BMI) 

alert(`Here is your BMI calculated ${roundDigit}`)