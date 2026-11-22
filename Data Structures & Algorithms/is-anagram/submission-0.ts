class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        const mapS: Record<string, number> = {}
        const mapT: Record<string, number> = {}

        for (const charS of s) {
            if (mapS[charS] !== undefined) mapS[charS] += 1
            else mapS[charS] = 1
        }

        for (const charT of t) {
            if (mapT[charT] !== undefined) mapT[charT] += 1
            else mapT[charT] = 1
        }

        for (const e of Object.entries(mapS)) {
            console.log([e, mapT[e[0]]])
            if (e[1] !== mapT[e[0]]) return false
        }

        return true
    }
}
