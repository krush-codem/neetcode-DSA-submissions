class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";

        let pf = strs[0];
        for (let i = 1; i<strs.length;i++){
            while(strs[i].indexOf(pf) !== 0)
                pf = pf.substring(0, pf.length-1)
            if (pf === "") return ''; 
        }
        return pf
    }
}
