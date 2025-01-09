/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0) {
            if ((i == 0 && flowerbed[i + 1] == 0) || 
                (i == flowerbed.length - 1 && flowerbed[i - 1] == 0) || 
                (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) || 
                (flowerbed.length == 1 && flowerbed[i] == 0)) 
            {
                flowerbed[i] = 1;
                n -= 1;
            } 
        }
    }

    console.log(flowerbed);
    console.log(n);

    return n <= 0;
};
