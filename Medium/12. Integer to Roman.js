/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var val = [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1,
    ];
    let roman = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ]

    let res = '';

    for (let i = 0; i < val.length && num > 0; i++) {
        while (val[i] <= num) {
            num -= val[i];
            res += roman[i]; 
        }
    }

    return res;
};
