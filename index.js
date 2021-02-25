const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased(){
  let splitTutorials = tutorials.map(title => {
    let splitTitleArr = title.split(' ')
    let titleString = splitTitleArr.map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1)
        })
        return titleString.join(" ")
  })
  return splitTutorials
}



// let splitTutorials = tutorials.map(title => {
//   let splitTitleArr = title.split(' ')
//   let titleString = splitTitleArr.map(str => {
//     return str.charAt(0).toUpperCase() + str.slice(1)
//       })
//       return titleString.join(" ")
// })
