let numbers = [1, 2, 3, 4, 5, 6]
function multiplyByTwo(array) {
  return array.map((arr) => {
    if (arr === 5) {
      arr = arr * 3
    }
    return arr
  })
}
// console.log(multiplyByTwo(numbers))
function divisibleByTwo(array) {
  return array.filter((arr) => {
    //filter filters the existing array and gives a new array
    //return cheyunna condiiton true aanel aa itethine puthye arrayilek pusheym
    return arr % 2 === 0
  })
}
console.log(divisibleByTwo(numbers))
// console.log(divisibleByTwo(numbers))
