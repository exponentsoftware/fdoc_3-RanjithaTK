const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
]
// console.log(convertArrayToObject(students))[
//   ({
//     name: "David",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [98, 85, 90, 95],
//   },
//   {
//     name: "John",
//     skills: ["HTM", "CSS", "JS", "React"],
//     scores: [85, 80, 85, 80],
//   })
// ]
function convertArrayToObject(students) {
  //   const obj = {}
  //   for (let i = 0; i < students.length; i++) {
  //     const { key, value } = students[i]
  //     obj[key] = value
  //   }

  for (let i = 0; i < students.length; i++) {
    const obj = { ...students[i] }
    console.log(obj)
    return obj
  }
}
console.log(convertArrayToObject(students))
