import { readLines } from '@/util/readLines'
import { getOptimalJoltages, calculateMaxJoltage, convertJoltagesArrayToNumber} from './03'
import path from 'node:path'

const INPUT_FILE = path.resolve(__dirname, 'input.txt')

async function main(): Promise<number[]> {
    const lines = readLines(INPUT_FILE)

    let maxJoltagePart1 = 0
    let maxJoltagePart2 = 0

    for await (const line of lines) {
        const joltages = parseLine(line)
        // Part 1
        maxJoltagePart1 += calculateMaxJoltage(joltages)

        // Part 2
        const optimalJoltages = getOptimalJoltages(joltages, 12)
        const max = convertJoltagesArrayToNumber(optimalJoltages)
        maxJoltagePart2 += max
    }

    return [maxJoltagePart1, maxJoltagePart2]
}

function parseLine(line: string): number[] {
    return line.split('').map(Number)
}


main().then(console.log)
