const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
]
function signUp(newUser) {
  let array = users.filter((user) => {
    return user.email === newUser.email //compares the input value with the existing
  })
  if (!array.length) {
    //if no such user found pushes to the users
    users.push(newUser)
  } else {
    console.log("user already exists")
  }
  return users
}
// console.log(
//   signUp({
//     _id: "1234",
//     username: "ranjitha",
//     email: "ranji@gmail.com",
//     password: "1234",
//     createdAt: Date(),
//   })
// )
function signIn(loginUser) {
  let array = users.filter((user) => {
    return (
      user.email === loginUser.email && user.password === loginUser.password
    )
  })
  if (array.length) {
    console.log("user logged in")
  } else {
    console.log("invalid email or password")
  }
}
// signIn({
//   email: "ranji@gmail.com",
//   password: "1234",
// })

//b
function rateProduct(_id, ratingValue) {
  return products.map((product) => {
    if (product._id === _id) {
      product.ratings.push(ratingValue)
    }
    return products[0].ratings
    // return product
  })
}
// console.log(rateProduct("eedfcf", { userId: "fgth", rate: 5 }))

function averageRating(_id) {
  return products.map((product) => {
    if (product._id === _id) {
      let sumOfRating = 0
      let numberOfRating = product.ratings.length
      // console.log(numberOfRating)
      for (let i = 0; i < numberOfRating; i++) {
        //i=0
        sumOfRating += product.ratings[i].rate
        console.log(sumOfRating)
      }
      return (averageRating = sumOfRating / numberOfRating)
    }
  })
}
console.log(averageRating("eedfcf"))
