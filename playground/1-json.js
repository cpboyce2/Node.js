const fs = require('fs')

// const book = {
//     title: 'Swift Programming', 
//     author: 'John Gallagher'
// }

// const bookJSON = JSON.stringify(book)
// // console.log(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)