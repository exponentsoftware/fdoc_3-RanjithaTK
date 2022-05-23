const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
}
// console.log(student.skills.frontEnd[0])
function newStudent(array, value) {
  array.push(value)
  return student.skills
}
console.log(
  newStudent(student.skills.backEnd, { skills: "bootstrap", level: 8 })
)
// function newStudent(skill, level) {
//   student.skills.frontEnd.push({ skill, level })
//   return student.skills
// }
// console.log(newStudent("bootstrap", 8))

// student.skills.frontEnd.push(
//   (student.frontEnd[skills] = "bootstrap"),
//   (student.frontEnd[level] = 8)
// )
// console.log(student)
