const removeFromArray = function(array, variable) {
  if(arguments.length > 2){
    for(let a = 1; a < arguments.length;a++){
      for(let x = 0; x < array.length; x++){
        if(array[x] == arguments[a] && typeof(array[x]) == typeof(arguments[a])){
          array.splice(x,1);
        }
      }
    }
  }else{
    for(let x = 0; x < array.length; x++){
      if(array[x] == variable){
        array.splice(x,1);
      }
    }
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
