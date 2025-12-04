import { describe, it, expect } from "vitest";
import {convertJoltagesArrayToNumber} from "./main"


describe("part 2 cases", () => {
    it("case 1", () => {
        const joltages = [9,8,7,6,5,4,3,2,1,1,1,1,1,1,1]
        const expected = 987654321111


    })
})


describe("convertJoltagesArrayToNumber", () => {
    it("should convert to number", () => {
        const joltages = [1, 2, 3, 4, 5]
        const expected = 12345
        const result = convertJoltagesArrayToNumber(joltages)

        expect(result).toBe(expected)
    })
})
