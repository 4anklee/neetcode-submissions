class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack = []
        const result = Array.from({length: temperatures.length}, () => 0)

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]] ) {
                const prev = stack.pop()
                result[prev] = i - prev
            }

            stack.push(i)
        }

        return result
    }
}
