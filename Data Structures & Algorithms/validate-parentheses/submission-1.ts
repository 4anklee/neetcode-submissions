class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = {
            ']': '[',
            ')': '(',
            '}': '{'
        }
        const stack = []

        for (const c of s) {
            if (c === '[' || c === '(' || c === '{') {
                stack.push(c)
            }

            if (c === ']' || c === ')' || c === '}') {
                if (stack[stack.length - 1] === map[c]) {
                    stack.pop()
                } else {
                    stack.push(c)
                }
            }
        }

        return stack.length === 0
    }
}
