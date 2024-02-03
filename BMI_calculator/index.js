let height = prompt('Enter your height in cm');
let weight = prompt('Enter your weight in kg');

let BMI = weight / (height * height);
if(BMI < 18.5){
    console.log('You are underweight')
}
else if((BMI >= 18.5) && (BMI < 25)){
    console.log('You are having normal weight')
}
else if((BMI >= 25) && (BMI < 30)){
    console.log('You are slightly overweight')
}
else if((BMI >=30) && (BMI < 35)){
    console.log('You are obese')
}
else {
    console.log('You are clinically obese')
}