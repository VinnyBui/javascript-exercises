const sumAll = function(first, last) {
  let sum = 0;
  if(first > last){
    let temp = 0;
    temp = first;
    first = last;
    last = temp;
  }else if(Math.sign(first,last) == -1){
    return "ERROR"
  }else if(typeof(first) != typeof(last)){
    return "ERROR"
  }
  for (first; first <= last; first++){
    sum += first;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
