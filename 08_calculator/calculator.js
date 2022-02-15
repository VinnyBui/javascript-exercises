const add = function() {
	let answer = 0
  for(let x = 0; x < arguments.length; x++){
    answer += arguments[x];
  }
  //[Arguments] { '0': 2, '1': 6 }
  return answer;
};

const subtract = function() {
  let answer = arguments[0] - arguments[1]
  return answer;
};

const sum = function() {
  //[Arguments] { '0': [] }
  let answer = 0;
  const array = arguments[0];
  if(array.length == 0){
    return 0;
  }else{
    for(let x = 0; x < array.length; x++){
      answer += array[x];
    }
    return answer;
  }
};

const multiply = function() {
  //[Arguments] { '0': [] }
  let answer = 1;
  const array = arguments[0];
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

const factorial = function() {
  let answer = 1;
  if(arguments[0] == 0){
    return 1;
  }else{
    for(let i = arguments[0]; i >= 1;i--){
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
