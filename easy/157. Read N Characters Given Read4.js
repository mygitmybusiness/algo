/**
 * Definition for read4()
 * read4 = function(buf4: string[]): number {
 *     ...
 * };
 */

var solution = function (read4: any) {

    return function (buf: string[], n: number): number {
        let i = 0, 
            endReached = false;

        while (i < n && !endReached) {
            let temp: string[] = [];
            let m: number = read4(temp);

            for (let j = 0; j < m && i < n; j++) {
                buf[i++] = temp[j];
            }

            endReached = m < 4;
        }

        return buf.length;
    };
};
