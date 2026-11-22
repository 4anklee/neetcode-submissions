class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>
        
        for (const str of strs) {
            const count: number[] = new Array(26).fill(0)
            for (const c of str) {
                const index = c.charCodeAt(0) - 'a'.charCodeAt(0)
                count[index]++
            }

            const key = count.join('#')
            if (!groups.has(key)) groups.set(key, [])

            groups.get(key)!.push(str)
        }

        return [...groups.values()]
    }
}
