class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0
        let max = 0

        for (let right = 1; right < prices.length; right++) {
            if (prices[right] < prices[left]) {
                left = right
            } else {
                max = Math.max(
                    prices[right] - prices[left],
                    max
                )
            }
        }

        return max
    }
}
