import path from 'node:path'
import { readLines } from "@/util/readLines";
import { parseInput, getAdjacentCells } from "./04";

const INPUT_FILE = path.resolve(__dirname, 'input.txt')

async function main(): Promise<number> {
    const lines = readLines(INPUT_FILE);

    const firstLine = parseInput((await lines.next()).value);
    const lineBuffer: string[][] = [
        Array(firstLine.length).fill("."),
        firstLine
    ]

    let accessibleRolls = 0
    for await (const line of lines) {
        const input = parseInput(line);

        lineBuffer.push(input)

        accessibleRolls += handleBuffer(lineBuffer)

        lineBuffer.shift()
    }

    lineBuffer.push(Array(firstLine.length).fill("."))
    accessibleRolls += handleBuffer(lineBuffer)

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
        }
    }

    return accessibleRolls
}


main().then(console.log)
