/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (!path.length) return '';
    let route = path.split('/').filter((str) => str != '');

    let output = [];
    
    for (let piece of route) {
        if (piece == '..') {
            output.pop();  
        } else if(piece == '.') {
            continue;
        } else {
            output.push(piece);
        }
    }

    return '/' + output.join('/');
};
