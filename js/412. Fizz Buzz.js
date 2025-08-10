/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var fizzBuzz = [];

    for (var i = 0; i < n; i ++) {
        let number = i + 1;

        switch (true) {
            case (number % 3 === 0 && number % 5 === 0):
                fizzBuzz[i] = "FizzBuzz";
                break;
            case (number % 3 === 0):
                fizzBuzz[i] = "Fizz";
                break;
            case (number % 5 === 0):
                fizzBuzz[i] = "Buzz";
                break;
            default:
                fizzBuzz[i] = number.toString();
                break;
        }
    }

    return fizzBuzz;    
};
