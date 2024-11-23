/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let map = new Map()
    for (chr of s) {
        map.set(chr, (map.get(chr) || 0) + 1)
    }
    for (chr of t) {
        if (map.has(chr)) {
            map.set(chr, map.get(chr) - 1)
            if (map.get(chr) === 0) {
                map.delete(chr)
            }
        }else{
            return false
        }
    }
    return map.size===0? true:false

};