/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var i = 0,
        place = -1;

    while (i < haystack.length) {
        if (haystack[i] == needle[0]) {
            place = i;

            var counter = 1;

            while (counter < needle.length) {
                if (haystack[i + counter] !== needle[counter]) {
                    place = -1;
                }

                counter++;
            }

            if (place !== -1) return place;
        }
        
        i++;
    }

    return place;
}
