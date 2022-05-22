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
  let array = []
  for (let i = 0; i < students.length; i++) {
    let obj = { ...students[i] }
    obj = {
      name: obj[0],
      skills: obj[1],
      scores: obj[2],
    }
    // const object = { ...obj }
    // object[0] = object["name"]
    // object["skills"] = object[1]
    // object["scores"] = object[2]
    // console.log(obj)
    array.push(obj)
  }
  return array
}
console.log(convertArrayToObject(students))
