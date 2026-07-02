class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function quick(l,r){
            if (l>=r) return;

            const pI = Math.floor(l + Math.random() * (r-l +1));
            const pE = nums[pI];

            [nums[pI], nums[r]] = [nums[r], nums[pI]];

            let i = l;
            for (let j = l;j<r; j++){
                if(nums[j] < pE){
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    i++;
                }
            }
            [nums[i], nums[r]] = [nums[r], nums[i]];

            quick(l, i-1);
            quick(i+1, r);

        }
            quick(0, nums.length - 1);
    return nums;
    }
}
