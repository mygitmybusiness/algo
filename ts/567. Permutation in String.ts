function checkInclusion(s1: string, s2: string): boolean {
    const m = s1.length;
    const n = s2.length;

    if (m > n) return false;

    let hash1 = new Array(26).fill(0);
    let hash2 = new Array(26).fill(0);

    for (let i = 0; i < m; i++) {
        hash1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        hash2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    if (hash1.toString() === hash2.toString()) return true;

    for (let i = m; i < n; i++) {
        hash2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        hash2[s2.charCodeAt(i - m) - 'a'.charCodeAt(0)]--;

        if (hash1.toString() === hash2.toString()) return true;
    }

    return false;
};