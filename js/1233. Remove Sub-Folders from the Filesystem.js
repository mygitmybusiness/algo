/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    let clear = [];

    folder.sort();

    clear.push(folder[0]);

    for (let i = 1; i < folder.length; i++) {
        let lastFolder = clear.at(-1);
        lastFolder += '/';

        if (!folder[i].startsWith(lastFolder)) {
            clear.push(folder[i]);
        }
    }

    return clear;
};
