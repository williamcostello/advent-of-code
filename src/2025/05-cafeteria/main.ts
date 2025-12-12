import path from 'node:path'
import { readLines} from "@/util/readLines";
import { parseFreshRanges } from './05'

const INPUT_FILE = path.resolve(__dirname, 'input.txt')

async function main(): Promise<number> {
    const lines = readLines(INPUT_FILE)

    const freshRanges = await parseFreshRanges(lines)
    let countFreshIds = 0
    for await (const id of lines) {
        const idNum = Number(id)

        for (const range of freshRanges) {
            if (idNum >= range.min && idNum <= range.max) {
                countFreshIds++
                break
            }
        }
    }

    return countFreshIds
}

main().then(console.log)
