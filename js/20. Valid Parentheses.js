/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];
    var complement = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (let char of s) {
      if (!complement[char]) stack.push(char);
      
      else if (stack.pop() !== complement[char]) return false;
    }
    
    return !stack.length;
  };
  