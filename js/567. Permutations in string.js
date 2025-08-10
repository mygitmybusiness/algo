// top
function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;
  
    const aCharCode = "a".charCodeAt(0);
    const charactersCounterS1 = new Array(26).fill(0);
    const charactersCounterS2 = new Array(26).fill(0);
  
    // Подсчитываем символы для s1 и для первого окна в s2
    for (let i = 0; i < s1.length; i++) {
      charactersCounterS1[s1.charCodeAt(i) - aCharCode]++;
      charactersCounterS2[s2.charCodeAt(i) - aCharCode]++;
    }
  
    // Проверяем первое окно
    if (charactersCounterS1.every((count, idx) => count === charactersCounterS2[idx])) {
      return true;
    }
  
    // Обновляем окно, начиная с индекса s1 до конца строки s2
    for (let i = s1.length; i < s2.length; i++) {
      // Добавляем новый символ, входящий в окно
      charactersCounterS2[s2.charCodeAt(i) - aCharCode]++;
      // Удаляем символ, который выходит из окна
      charactersCounterS2[s2.charCodeAt(i - s1.length) - aCharCode]--;
  
      if (charactersCounterS1.every((count, idx) => count === charactersCounterS2[idx])) {
        return true;
      }
    }
  
    return false;
  }

// mine

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map1 = new Map();
    let map2 = new Map(); 

    // count chars
    for (let char of s1) {
        map1.set(char, (map1.get(char) || 0 ) + 1 );
    }

    for (let i = 0; i < s2.length; i++) {
        let substring = s2.slice(i, s1.length + i); // ?

        for (let char of substring) {
            map2.set(char, (map2.get(char) || 0) + 1); // count substring chars
        }

        for (let key of map1.keys()) {
            if (map1.get(key) !== map2.get(key)){
                map2.clear();
            }
        }

        if (map2.size > 0) return true;
    }

    return false;
};
