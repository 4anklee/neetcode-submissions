class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            const comp = map.get(target - nums[i])
            if (comp !== undefined) return [i, comp]
            map.set(nums[i], i)
        }

        return [-1, -1]
    }
}
