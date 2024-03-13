const student_scores = {
    "Harry":  81,
    "Ron": 78,
    "Hermione": 99,
    "Draco": 74,
    "Neville": 62,
}
// Creating an empty dictionary
const student_grades = {}

//TODO-2: Write your code below to add the grades to student_grades.👇
//Assuming you have a list of students and their respective grades:

for (student in student_scores) {
    const score = student_scores[student];

    if(score >= 91 && score < 100) {
        student_grades[student] = "Outstanding";
    } else if (score >= 81 && score < 91){
        student_grades[student] = "Exceed expectations";
    } else if (score >= 71 && score <= 80 ) {
        student_grades[student] = 'Acceptable';
    } else {
        student_grades[student] = 'Fail';
    }
       
}

console.log(student_scores)
console.log(student_grades)
