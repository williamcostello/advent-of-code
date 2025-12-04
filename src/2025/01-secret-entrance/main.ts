import { readLines } from "@/util/readLines";
import path from "node:path";

const INPUT_FILE = path.resolve(__dirname, 'input.txt');
const POINTER_START = 50

async function main(): Promise<number> {
    const lines = readLines(INPUT_FILE);

    let pointer = POINTER_START;
    let numZeroClicks = 0;

    for await (const line of lines) {
        const distance = parseLine(line);
        const lastPointer = pointer;

        pointer = (pointer + distance) % 100;
        if (pointer < 0) pointer = 100 + pointer;

        // Part 1
        if (pointer === 0) {
            numZeroClicks++;
        }

        // Part 2
        const fullTurns = Math.floor(Math.abs(distance) / 100);
        numZeroClicks += fullTurns;

        if (pointer !== 0 && lastPointer !== 0) {
            if (distance < 0 && pointer > lastPointer) {
                numZeroClicks++;
            }

            if (distance > 0 && pointer < lastPointer) {
                numZeroClicks++;
            }
        }
    }

    return numZeroClicks;
}

function parseLine(line: string): number {
    const direction = line[0];
    const distance = parseInt(line.slice(1));

    return direction === "L" ? -distance : distance;
}

main().then(console.log);
