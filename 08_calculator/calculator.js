const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
  //[Arguments] { '0': [] }
  let answer = 0;
  if(array.length == 0){
    return 0;
  }else{
    for(let x = 0; x < array.length; x++){
      answer += array[x];
    }
    return answer;
  }
};

const multiply = function(array) {
  //[Arguments] { '0': [] }
  let answer = 1;
  if(array.length == 0){
    return 0;
  }else{
    for(let x = 0; x < array.length; x++){
      answer *= array[x]
    }
    return answer;
  }
};

const power = function() {
	let answer = Math.pow(arguments[0],arguments[1])
  return answer;
};

const factorial = function(n) {
  let answer = 1;
  if(n == 0){
    return 1;
  }else{
    for(let i = n; i >= 1;i--){
      answer = answer * i;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
