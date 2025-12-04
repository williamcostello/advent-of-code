import { readCsv } from "@/util/readCsv";
import path from "node:path";

const INPUT_FILE = path.resolve(__dirname, 'input.txt');

async function main(): Promise<any> {
    const rows = readCsv(INPUT_FILE)
    // input is on one row
    const row = (await rows.next()).value

    let res = 0;
    for (const range of row) {
        const { min, max } = parseRange(range)

        for (let i = min; i <= max; i++) {
            const str =  i.toString()

            // Part 1
            // const [left, right] = splitStringIntoParts(str, 2)
            // if (left === right) res += i

            // Part 2
            let nParts = 2
            while (nParts <= str.length) {
                const parts = splitStringIntoParts(str, nParts)

                if (parts.every(part => part === parts[0])) {
                    res += i
                    break
                }

                nParts++
            }
        }
    }

    return res
}

type Range = {
    min: number,
    max: number,
}

function parseRange(range: string): Range {
    const [min, max] = range.split('-').map(Number);

    return { min, max };
}

function splitStringIntoParts(str: string, parts: number): string[] {
    const partLength = Math.floor(str.length / parts);
    const partsArray = [];

    for (let i = 0; i < str.length; i += partLength) {
        partsArray.push(str.slice(i, i + partLength));
    }

    return partsArray;
}

main().then(console.log);
