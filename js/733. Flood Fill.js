/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let defaultColor = image[sr][sc];
    if (defaultColor == newColor) return image;

    let searchPixel = (y, x) => {
        console.log(`Y: ${y}, X: ${x}`)
        if (image[y][x] == defaultColor) {
            image[y][x] = newColor;
        } else {
            return;
        }

        // left
        if (x > 0) searchPixel(y, x - 1);
        //right
        if (x < image[y].length - 1) searchPixel(y, x + 1);
        // top
        if (y > 0) searchPixel(y - 1, x)
        // down
        if (y < image.length - 1) searchPixel(y + 1, x)
    }

    searchPixel(sr, sc);

    return image;
};
