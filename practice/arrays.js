//  arrays.js
const steps = ["one", "two", "three"]
const listTemplate = (step) => {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate) // use map to convert the list from strings to HTML

document.querySelector("#myList").innerHTML = stepsHtml.join(" ") // set the innerHTML

const grade = ['A', 'B', 'A']

const calcGPA = (letter) => {
    let gpa = 0;
    switch(letter) {
    case "A":
        gpa = 4.0
        break
    case "A-":
        gpa = 3.7
        break
    case "B+":
        gpa = 3.3
        break
    case "B":
        gpa = 3.0
        break
    case "B-":
        gpa = 2.7
        break
    case "C+":
        gpa = 2.3
        break
    case "C":
        gpa = 2.0
        break
    case "C-":
        gpa = 1.7
        break
    case "D+":
        gpa = 1.3
        break
    case "D":
        gpa = 1.0
        break
    case "D-":
        gpa = 0.7
        break
    case "F":
        gpa = 0
        break
}
return gpa
}


const grade_letter = grade.map(calcGPA)
console.log(grade_letter)

