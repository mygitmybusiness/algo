function mirrorFrequency(s: string): number {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";

    let mirrorChars = new Map();
    let mirrorNumbers = new Map();

    for (let l = 0, r = alphabet.length - 1; l < alphabet.length, r >= 0; l++, r--) {
      mirrorChars.set(alphabet[l], alphabet[r]);
    }

    for (let l = 0, r = numbers.length - 1; l < numbers.length, r >= 0; l++, r--) {
      mirrorNumbers.set(numbers[l], numbers[r]);
    }

    let freq = new Map();

    for (let char of s) {
      freq.set(char, (freq.get(char) || 0) + 1);
    }

    let sum = 0;
    let bannedChars = new Set();

    for (let char of s) {
      if (bannedChars.has(char)) continue;
      sum += Math.abs(freq.get(char) - (freq.get(Number.isNaN(Number.parseInt(char)) ? mirrorChars.get(char) : mirrorNumbers.get(char)) || 0));
      bannedChars.add(Number.isNaN(Number.parseInt(char)) ? mirrorChars.get(char) : mirrorNumbers.get(char));
      bannedChars.add(char);
    }

    return sum;
};
