import { readLines } from '@/util/readLines'
import path from 'node:path'

const INPUT_FILE = path.resolve(__dirname, 'test.txt')
const N_BATTERIES = 12

async function main(): Promise<number> {
    const lines = readLines(INPUT_FILE)

    let maxJoltage = 0
    for await (const line of lines) {
        const joltages = parseLine(line)
        // Part 1
        // maxJoltage += calculateMaxJoltage(joltages, N_BATTERIES)

        // Part 2
        const optimalJoltages = getOptimalJoltages(joltages, N_BATTERIES)
        // console.log({optimalJoltages})
        const max = convertJoltagesArrayToNumber(optimalJoltages)
        console.log(maxJoltage)
        maxJoltage += max
    }

    return maxJoltage
}

function parseLine(line: string): number[] {
    return line.split('').map(Number)
}

// Part 1
// function calculateMaxJoltage(joltages: number[]): number {
//     // find max thats not n from last element
//     let max = 0
//     let maxIndex = -1
//     for (let i = 0; i < joltages.length - 1; i++) {
//         if (joltages[i] > max) {
//             max = joltages[i]
//             maxIndex = i
//         }
//     }
//
//     // find second max
//     let secondMax = 0
//     for (let i = maxIndex + 1; i < joltages.length; i++) {
//         if (i !== maxIndex && joltages[i] > secondMax) {
//             secondMax = joltages[i]
//         }
//     }
//
//     return max * 10 + secondMax
// }

function getOptimalJoltages(joltages: number[], nBatteries: number, out: number[] = []): number[] {
    if (joltages.length === 0) {
        return out
    }

    const searchSpace = joltages.slice(0, joltages.length - nBatteries + 1)
    const maxJoltage = Math.max(...searchSpace)
    const maxJoltageIndex = joltages.indexOf(maxJoltage)

    out.push(maxJoltage)

    joltages = joltages.slice(maxJoltageIndex + 1)

    if (nBatteries === joltages.length) {
        out.push(...joltages)
        return out
    }

    nBatteries--

    if (nBatteries === 0) {
        return out
    }

    return getOptimalJoltages(joltages, nBatteries, out)
}


export function convertJoltagesArrayToNumber(joltages: number[]) {
    return joltages.reduce((acc, curr, index) => acc + curr * Math.pow(10, joltages.length - index - 1), 0)
}


main().then(console.log)
