class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0
        let right = heights.length - 1
        let max = 0
        
        while (left < right) {
            const width = right - left
            
            const h = Math.min(heights[left], heights[right])

            max = Math.max(max, h * width)

            while (heights[left] <= h) {
                left++
            }

            while (heights[right] <= h) {
                right--
            }

        }

        return max
    }
}
