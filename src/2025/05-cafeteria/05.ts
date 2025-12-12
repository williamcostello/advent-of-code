type Range = {
    min: number,
    max: number,
}

export async function parseFreshRanges(lines: AsyncGenerator<string>) {
    const ranges: Range[] = []

    do {
        const line = (await lines.next()).value

        if (line === '') break;

        const [min, max] = line.split('-').map(Number)
        ranges.push({ min, max })
    } while (true)

    return ranges
}

