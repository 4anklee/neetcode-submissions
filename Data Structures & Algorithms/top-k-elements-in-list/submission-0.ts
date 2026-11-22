class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map()

        for (const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1)
        }

        const bucket = Array.from({length: nums.length + 1}, () => [])

        for (const [num, freq] of map) {
            bucket[freq].push(num)
        }

        const result = []

        for (let i = bucket.length - 1; i >= 0; i--) {
            if (bucket[i].length !== 0) result.push(...bucket[i])
        }

        console.log(result)

        return result.slice(0, k)
    }
}
