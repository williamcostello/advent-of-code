import fs from "fs";
import { parse, type Options } from "csv-parse"

export async function* readCsv(filePath: string, opts: Options = {}): AsyncGenerator<string> {
    const fileStream = fs.createReadStream(filePath, {
        encoding: "utf8",
    });

    const parser = parse(opts)

    const rows = fileStream.pipe(parser)

    for await (const row of rows) {
        yield row;
    }
}