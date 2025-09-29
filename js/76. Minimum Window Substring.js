function minWindow(s: string, t: string): string {
    //build the map 
    let map = {};
    let unique = 0;

    for (let i = 0; i < t.length; i++) {
        map[t[i]] = map[t[i]] + 1 || 1;
        if (map[t[i]] === 1) unique++;
    }

    //left and right pointers
    let left = 0;
    let right = 0;
    let ans = "";

    while (right < s.length) {
        let r = s[right];

        //check if letter exists in map, decrement
        if (map[r] != undefined) {
            map[r]--;
            if (map[r] === 0) unique--;
        }

        //if all values of map are 0, attempt to shrink the window        
        if (unique === 0) {

            //we can shrink if our left is not in map, or we have extra lefts in map
            let l = s[left];
            while (map[l] == undefined || map[l] < 0) {
                if (map[l] < 0) map[l]++;
                left++;
                l = s[left];
            }

            //compare your current substring to your answer          
            let currSub = s.slice(left, right + 1);

            if (ans.length === 0 || ans.length > currSub.length) {
                ans = currSub;
            }
        }

        right++;
    }

    return ans;
};
