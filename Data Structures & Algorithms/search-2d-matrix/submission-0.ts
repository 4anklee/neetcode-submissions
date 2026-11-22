class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const flat = matrix.flat()
        let left = 0
        let right = flat.length - 1

        while(left <= right) {
            let m = Math.floor((left + right) / 2)

            if (flat[m] === target) return true
            else if (flat[m] < target) left = m + 1
            else right = m - 1
        }

        return false
    }
}
