class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};

        for(let s of strs){
            let sSort = s.split('').sort().join('')

            if (!map[sSort])
                map[sSort] = [];

            map[sSort].push(s);  
        }
        return Object.values(map);
    }
}
