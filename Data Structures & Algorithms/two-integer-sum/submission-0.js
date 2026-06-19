class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let store = new Map();
        for(let i=0; i<nums.length;i++){
            let c = target - nums[i];
            if (store.has(c))
                return [store.get(c), i ];
            store.set(nums[i], i)
        }
        return []
    }
}
