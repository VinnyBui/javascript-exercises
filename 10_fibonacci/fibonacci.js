const fibonacci = function(num) {
  let sum = 0
  let num1 = 0 
  let num2 = 1
  if(num == 1 ) return 1;
  else if(num < 0) return "OOPS";
  else{
    for(let i = 1; i < num; i++){
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    return num2;
  }
};

// Do not edit below this line
module.exports = fibonacci;
