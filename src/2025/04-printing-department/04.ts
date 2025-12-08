export function parseInput(input: string): string[] {
    const parsed = input.split('')

    // pad the row to prevent out of bounds errors
    parsed.unshift('.')
    parsed.push('.')

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
