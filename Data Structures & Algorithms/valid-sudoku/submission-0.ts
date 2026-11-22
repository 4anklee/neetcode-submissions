class Solution {
    /**
     * @param {character[][]}
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const map = new Map<string, Map<string, number>>()
        for (let i = 0; i < board.length; i++) {
            if (!map.has(`row${i}`)) map.set(`row${i}`, new Map())
            for (let j = 0; j < board[i].length; j++) {
                if (!map.has(`col${j}`)) map.set(`col${j}`, new Map())

                const num = board[i][j]
                if (num === ".") continue

                const box = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (!map.has(`box${box}`)) map.set(`box${box}`, new Map())

                if (map.get(`row${i}`)!.get(num)) return false
                else map.get(`row${i}`)!.set(num, 1)

                if (map.get(`col${j}`)!.get(num)) return false
                else map.get(`col${j}`)!.set(num, 1)

                if (map.get(`box${box}`)!.get(num)) return false
                else map.get(`box${box}`)!.set(num, 1)
            }
        }

        return true
    }
}