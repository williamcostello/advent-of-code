import { readCsv } from "@/util/readCsv";
import path from "node:path";

const INPUT_FILE = path.resolve(__dirname, 'input.txt');

async function main(): Promise<number> {
    // input is on one row
    const rows = readCsv(INPUT_FILE)
    const row = (await rows.next()).value

    let res = 0;
    for (const range of row) {
        const { min, max } = parseRange(range)

        for (let i = min; i <= max; i++) {
            const str =  i.toString()
            const [left, right] = splitStringInHalf(str)

            if (left === right) res += i
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

function splitStringInHalf(str: string): [string, string] {
    const mid = Math.floor(str.length / 2);

    return [str.slice(0, mid), str.slice(mid)];
}

main().then(console.log);
