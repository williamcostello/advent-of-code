// part 1
export function calculateMaxJoltage(joltages: number[]): number {
    // find max thats not n from last element
    let max = 0
    let maxIndex = -1
    for (let i = 0; i < joltages.length - 1; i++) {
        if (joltages[i] > max) {
            max = joltages[i]
            maxIndex = i
        }
    }

    // find second max
    let secondMax = 0
    for (let i = maxIndex + 1; i < joltages.length; i++) {
        if (i !== maxIndex && joltages[i] > secondMax) {
            secondMax = joltages[i]
        }
    }

    return max * 10 + secondMax
}

// part 2
export function getOptimalJoltages(
    joltages: number[],
    nBatteries: number,
    out: number[] = []
): number[] {
    if (joltages.length === 0 || nBatteries === 0) {
        return out
    }

    if (nBatteries === joltages.length) {
        out.push(...joltages)
        return out
    }

    const searchSpace = joltages.slice(0, joltages.length - nBatteries + 1)
    const maxJoltage = Math.max(...searchSpace)
    const maxJoltageIndex = joltages.indexOf(maxJoltage)

    out.push(maxJoltage)

    joltages = joltages.slice(maxJoltageIndex + 1)
    nBatteries--

    return getOptimalJoltages(joltages, nBatteries, out)
}

export function convertJoltagesArrayToNumber(joltages: number[]) {
    return joltages.reduce((acc, curr, index) => acc + curr * Math.pow(10, joltages.length - index - 1), 0)
}
