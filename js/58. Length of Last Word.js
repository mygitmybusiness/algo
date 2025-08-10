var lengthOfLastWord = function(s) {
    var words = s.split(' ');

    return words.at(-1).length;
};

console.log(lengthOfLastWord("luffy is still joyboy"));
