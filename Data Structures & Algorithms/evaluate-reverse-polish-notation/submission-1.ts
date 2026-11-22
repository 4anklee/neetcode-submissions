class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []

        for (const t of tokens) {
            if (['+', '-', '*', '/'].includes(t)) {
                const b = stack.pop()
                const a = stack.pop()
                switch (t) {
                    case ('+'): 
                        stack.push(a + b)
                        break
                    case ('-'):
                        stack.push(a - b)
                        break
                    case ('*'):
                        stack.push(a * b)
                        break
                    case ('/'):
                        stack.push(Math.trunc(a / b))
                        break
                }
            } else [
                stack.push(Number(t))
            ]
        }

        return stack.pop()
    }
}
