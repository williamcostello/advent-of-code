export type Problem = {
    numbers: number[],
    op: Op
}
export type Worksheet = Problem[]
export type Op = "*" | "+" | null

export async function parseWorksheet(lines: AsyncGenerator<string>): Promise<Worksheet> {
    const worksheet: Worksheet = []

    for await (const line of lines) {
        const parts = line.trim().split(/ +(?! *\n)/)

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]

            if (worksheet[i] === undefined) {
                worksheet[i] = {
                    numbers: [],
                    op: null
                }
            }

            if (part === "*" || part === "+") {
                worksheet[i].op = part
            } else {
                worksheet[i].numbers.push(Number(part))

            }
        }
    }

    return worksheet
}
