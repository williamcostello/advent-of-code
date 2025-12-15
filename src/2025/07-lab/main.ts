import path from 'node:path'
import { readLines } from '@/util/readLines'

const INPUT_FILE = path.resolve(__dirname, 'input.txt')

async function main(): Promise<number> {
    const lines = readLines(INPUT_FILE)
    const manifold = await parseManifold(lines)

    let nSplits = 0
    const width = manifold[0].length
    const startIndex = manifold[0].indexOf('S')
    const beams = new Set<number>([startIndex])

    for (let row = 0; row < manifold.length - 1; row++) {
        const line = manifold[row]

        for (let col = 0; col < width; col++) {
            if (!beams.has(col)) continue

            const cell = line[col]
            if (cell === '^') {
                beams.delete(col)

                col > 0 && beams.add(col - 1)
                col < width - 1 && beams.add(col + 1)
                nSplits++
            }
        }
    }

    return nSplits
}

async function parseManifold(lines: AsyncIterable<string>): Promise<string[]> {
    const manifold = []

    for await (const line of lines) {
        manifold.push(line)
    }

    return manifold
}

main().then(console.log)
