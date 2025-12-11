import path from 'node:path'
import { readLines } from "@/util/readLines";
import {getAdjacentCells, parseFullInput, removeMarkedCells} from "./04";

const INPUT_FILE = path.resolve(__dirname, 'input.txt')

// i dont like this code either
async function main(): Promise<number> {
    const lines = readLines(INPUT_FILE);

    const parsed = await parseFullInput(lines)

    let accessibleRolls = 0
    let isRollsRemoved = false
    do {
        let removedRolls = 0

        for (let i = 1; i < parsed.length - 1; i++) {
            const lineBuffer = [
                parsed[i - 1],
                parsed[i],
                parsed[i + 1]
            ]

            const change = handleBuffer(lineBuffer)
            removedRolls += change
        }

        if (removedRolls === 0) break;
        accessibleRolls += removedRolls
        isRollsRemoved = true
    } while (isRollsRemoved)

    return accessibleRolls
}

function handleBuffer(buffer: string[][]) {
    let accessibleRolls = 0
    const middleLine = buffer[1]

    for (let i = 1; i < middleLine.length - 1; i++) {
        if (middleLine[i] !== "@") continue;

        const adjacent = getAdjacentCells(buffer, i)
        const nToiletRolls = adjacent.filter(cell => cell === "@").length

        if (nToiletRolls < 4) {
            accessibleRolls++
            middleLine[i] = "x"
        }
    }

    return accessibleRolls
}


main().then(console.log)
