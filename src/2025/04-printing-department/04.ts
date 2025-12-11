export function parseInput(input: string): string[] {
    const parsed = input.split('')

    // pad the row to prevent out-of-bounds errors
    parsed.unshift('.')
    parsed.push('.')

    return parsed
}

export async function parseFullInput(lines: AsyncGenerator<string>): Promise<string[][]> {
    const firstLine = parseInput((await lines.next()).value);

    const parsed = [
        Array(firstLine.length).fill("."),
        firstLine,
    ]

    for await (const line of lines) {
        parsed.push(parseInput(line))
    }

    parsed.push(Array(firstLine.length).fill("."))

    return parsed
}

export function getAdjacentCells(buffer: string[][], index: number): string[] {
    const topLine = buffer[0]
    const middleLine = buffer[1]
    const bottomLine = buffer[2]

    return [
        topLine[index - 1],
        topLine[index],
        topLine[index + 1],
        middleLine[index - 1],
        middleLine[index + 1],
        bottomLine[index - 1],
        bottomLine[index],
        bottomLine[index + 1],
    ]
}

export function removeMarkedCells(input: string[][]) {
    for (const row of input) {
        for (let i = 0; i < row.length; i++) {
            if (row[i] === "x") {
                row[i] = "."
            }
        }
    }
}
