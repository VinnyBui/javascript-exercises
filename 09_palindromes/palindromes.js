const palindromes = function (str) {
  str = str.split(" ").join("").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  let len = str.length
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
