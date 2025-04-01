function lengthOfLongestSubstring(s: string): number {
    let longest = 0;
    let queue = [];

    for (let i = 0; i < s.length; i++) {
        queue.push(s[i]);

        while (new Set(queue).size != queue.length) {
            queue.shift();
        }

        longest = Math.max(longest, queue.length)
    }

    return longest;
};