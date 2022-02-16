const findTheOldest = function(person) {
  let oldest = 0;
  let position;
  objLen = Object.keys(person).length;
  for(let x = 0; x < objLen; x++){
    if(oldest < (person[x].yearOfDeath - person[x].yearOfBirth)){
      oldest = person[x].yearOfDeath - person[x].yearOfBirth
      position = x
    }
  }
  return person[position];
};

// Do not edit below this line
module.exports = findTheOldest;
