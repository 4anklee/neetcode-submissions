class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let left = 0
        let right = numbers.length - 1

        while (left < right) {
            const comp = target - numbers[left]
            if (numbers[right] === comp) return [left + 1, right + 1]
            if (numbers[right] > comp) right--
            if (numbers[right] < comp) left++
        }

        return [0, 0]
    }
}
