const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      }
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// destructuring

// const book = getBook(1);

// // before destructring we have to write a line for each object property.
// // const title = book.title;
// // const author = book.author;

// // after destructring we can write them in one line
// const {title,author,pages,genres,publicationDate,hasMovieAdaptation} = book;

// // console.log(title,author,pages,genres,publicationDate,hasMovieAdaptation)

//  // Lets learn array destructuring now

//  // before array destructring , line for each element of array 
// //  const primaryGenre = genres[0]
// //  const secondaryGenre = genres[1]

//  // after destructuring , we can compact into a single file
//  // ... is rest operator
//  // rest operator can only be used at end only
//  // rest variable will only contain the rest of elements that are not destructured before.
//  const [primaryGenre,secondaryGenre,...otherGenres] = genres

//  console.log(primaryGenre,secondaryGenre,otherGenres)

//  // Spread operator -> help to spread an array and object into a new array or new object with addition of new
//  // properties or overriding of existing properties.

// //  Example of array spread
// const newGenres = ["epic fantasy",...genres]
// console.log(newGenres)

// // Example of spread with object
// const updatedBook = {...book,
//   // add new property
//   moviePublicationDate:"2001-12-19",
//   // override existing property
//   pages:1210}

//   console.log(updatedBook)

  // normal function -
// function getYear(str){
//   return str.split("-")[0]
// }

  // Arrow function -> It is more simpler way of writing functions in js ,usually used as function expression , its syntax is as per follows.
  // const getYear = (str) => str.split("-")[0] // such one liners are easy to write with arrow function because for liner return functions we also even not have to write return statement

  // for multi lines we have to make a block
   const getYear = (str) => {
    return str.split("-")[0]
  }


  // Template literal , it is a ES 6 feature with the help of which we can add any javascript expression inside a string
  // it is always written inside backticks
//   const summary = `${title}, a ${pages}-page long book, was writte by ${author} and published in ${getYear(publicationDate)}`
// console.log(summary)

// Ternary operator -> it is a condtional operator it has three operands 
// 1. condition
// 2. Result of condition if condition is true
// 3. Result of condition if condition is false

// const pagesRange = pages > 1000 ? "over a thousand" : 'less than thousand';
// console.log(pagesRange)
// console.log(`The book has ${pagesRange} pages`)

// // short circuiting and logical operators 
// console.log(true && "Some String")
// console.log(false && "Some String")
// console.log(hasMovieAdaptation && "This book has a movie")

// // falsy: 0,'',null,undefined,false
// console.log('jonas' && "Some String")
// console.log(0 && "Some Thing")

// console.log(true || "Some thing")
// console.log(false  || "Some string " )

// console.log(book.translations.spanish)

// // usecase of or operator is to set default values of variable or state in react
// const spanishTranslation = book.translations.spanish || "NOT TRANSLATED"
// console.log(spanishTranslation)

// // or operator can go wrong if we wanted 0 or empty string as truthy values its solution us nullish coalsecing operator
// console.log(book.reviews.librarything.reviewsCount)
// const countWrong  = book.reviews.librarything.reviewsCount || "no data"
// console.log(countWrong)

// // nullish coalsacking operator ?? only consider null and undefined as falsy.
// const count = book.reviews.librarything.reviewsCount ?? "no data"

// const getTotalReviewCount = (book) => {
//  let totalReviewCount = 0;
// for(let [reviewName,review] of Object.entries(book.reviews)){
//     totalReviewCount += review.reviewsCount
// }
// return totalReviewCount
// }

// console.log(getTotalReviewCount(book))

// forEach array method  -> for accessing array elements only not return anything

// const arr = [1,2,43]
// let sum = 0
// arr.forEach((el,index,array) => {
//    console.log(el,index,array)
//    sum= sum+el
// })
// console.log(sum)

// Map array method -> 
// let newArr = arr.map((el,index,array) => {
//    console.log(el,index,array)
//    return el+1
// })
// console.log(newArr)

// Filter array method -> 
//  newArr = arr.filter((el,index,array) => {
//    console.log(el,index,array)
//    return el > 5
// })
// console.log(newArr)

//  newArr = arr.reduce((prValue,el,index,array) => {
//    console.log(el,index,array)
//    return prValue + el
// },0)
// console.log(newArr)

// const namesArr = ["purnesh","yogesh","kartik"]

// const namesObjArr1 = namesArr.map(el => ({name:el}))
// console.log(namesObjArr1)

// const namesObjArr = namesArr.reduce((prValue,el) =>{


//   prValue = [...prValue,{name:el}]


//   return prValue


// } ,[])



// console.log(namesObjArr)
// const books = getBooks();
// const totalPages = books.reduce((prValue,book) => {
//   prValue = prValue+book.pages
//   return prValue
// },0)

// console.log(totalPages)

// const arr1 = [3,7,1,9,6];
// const sorted = arr1.sort((a,b) => b-a)
// console.log(sorted)

const books = getBooks()

books.sort((book1,book2) => book1.pages -book2.pages)
books;

const testObj = {
  hello:"hi"
}
const testObj2 = {...testObj,tello:2}
//  new property in testObj without modifying testObj
// delete tello fron testObj2 without modifying it.
testObj2
const testObj3 ={...testObj2};
delete testObj3.tello
testObj3;

const origArr = [1,2,3,4];
// const newd = [...origArr ]
// newd[0] =5
// const newd =[...origArr];
// newd.shift();
// newd
// origArr.unshift(9);
// origArr
// const newArr = origArr.filter((value,index,arr) => index !== 4)
// newArr

const fruitsObj = {
banana:"yello",
apple:"red",
orange:"orange"
}

// string fruitName;
// cin>>fruitName;
let fruitName = "apple"
console.log(fruitsObj[fruitName])




