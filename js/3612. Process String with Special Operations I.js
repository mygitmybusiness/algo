function processStr(s: string): string {
    let res = [];

    for (let char of s) {
      switch (char) {
        case '*':
          res.pop();
          break;
        case '#':
          res = [...res, ...res];
          break;
        case '%':
          for (let i = 0, j = res.length - 1; i < j; i++, j--) {
            let tmp = res[j];
            res[j] = res[i];
            res[i] = tmp;
          }
          break;
        default:
          res.push(char);
          break;
      }
    }

    return res.join('');
};