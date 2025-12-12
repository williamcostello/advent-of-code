import path from "node:path";
import { readLines} from "@/util/readLines";
import {parseWorksheet} from "@/2025/06-math-homework/06";

const INPUT_FILE = path.resolve(__dirname, 'input.txt')

async function main(): Promise<number> {
    const lines = readLines(INPUT_FILE)

    const worksheet = await parseWorksheet(lines)

    let sum = 0
    for (const problem of worksheet) {
        if (problem.op === "+") {
            sum += problem.numbers.reduce((acc, curr) => acc + curr)
        } else {
            sum += problem.numbers.reduce((acc, curr) => acc * curr)
        }
    }

    return sum
}

main().then(console.log)
