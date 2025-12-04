import fs from "fs";
import readline from "readline";

export async function* readLines(filePath: string): AsyncGenerator<string> {
    const fileStream = fs.createReadStream(filePath, {
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