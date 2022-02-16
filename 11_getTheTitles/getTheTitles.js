const getTheTitles = function(book) {
  let objLen = Object.keys(book).length;
  let answer = []
  for(let x = 0; x < objLen; x++){
    answer.push(book[x].title);
  }
  return answer
};

// Do not edit below this line
module.exports = getTheTitles;
