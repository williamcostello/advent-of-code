import fs from "fs";
import readline from "readline";

export async function* readLines(path: string): AsyncGenerator<string> {
    const fileStream = fs.createReadStream(path, {
        encoding: "utf8",
    });

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity, // Recognize all line endings
    });

    for await (const line of rl) {
        yield line;
    }
}