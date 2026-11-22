class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = {}
        for (const num of nums) {
            if (map[num] !== undefined) {
                return true
            } else {
                map[num] = 1
            }
        }

        return false 
    }
}
