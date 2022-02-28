// module.exports = function check(str, bracketsConfig) {
//   // your solution
// }
module.exports = function check(str, bracketsConfig) {
  const brackets = getBrackets(bracketsConfig);
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '|' && str[i] === str[str.length-1])        {
      stack.push(str[i]);
    }
    if (isClose(str[i])) {
      if (brackets[str[i]] !== stack.pop()){
        return false;
      } 
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
}

function isClose(cur) {
  return [')', ']', '}', '|'].indexOf(cur) > -1;
}

function getBrackets(bracketsConfig) {
  let objBr = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    objBr[bracketsConfig[i][1]] = bracketsConfig[i][1];
  }

  return objBr;
}



