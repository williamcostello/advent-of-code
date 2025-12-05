import { readLines } from '@/util/readLines'
import path from 'node:path'

const INPUT_FILE = path.resolve(__dirname, 'input.txt')

async function main(): Promise<number> {
    const lines = readLines(INPUT_FILE)

    let maxJoltage = 0
    for await (const line of lines) {
        const joltages = parseLine(line)
        maxJoltage += calculateMaxJoltage(joltages)
    }

    return maxJoltage
}

function parseLine(line: string): number[] {
    return line.split('').map(Number)
}

function calculateMaxJoltage(joltages: number[], nBatteries: number): number {
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

// part 2: can we recursively find the max joltage - reducing the N of batteries each step?
// Only continuing while the length of the array is > N
// return early when the length of the array gets <= N

main().then(console.log)
