import { describe, it, expect } from "vitest";
import {calculateMaxJoltage, convertJoltagesArrayToNumber, getOptimalJoltages} from "./03"

describe("part 1 calculateMaxJoltage", () => {
    it("case 1", () => {
        const joltages = [9,8,7,6,5,4,3,2,1,1,1,1,1,1,1]
        const expected = 98
        const result = calculateMaxJoltage(joltages)

        expect(result).toBe(expected)
    })

    it("case 2", () => {
        const joltages = [8,1,1,1,1,1,1,1,1,1,1,1,1,1,9]
        const expected = 89
        const result = calculateMaxJoltage(joltages)

        expect(result).toBe(expected)
    })

    it("case 3", () => {
        const joltages = [2,3,4,2,3,4,2,3,4,2,3,4,2,7,8]
        const expected = 78
        const result = calculateMaxJoltage(joltages)

        expect(result).toEqual(expected)
    })

    it("case 4", () => {
        const joltages = [8,1,8,1,8,1,9,1,1,1,1,2,1,1,1]
        const expected = 92
        const result = calculateMaxJoltage(joltages)

        expect(result).toEqual(expected)
    })
})

describe("part 2 getOptimalJoltages", () => {
    const N_BATTERIES = 12

    it("case 1", () => {
        const joltages = [9,8,7,6,5,4,3,2,1,1,1,1,1,1,1]
        const expected = [9,8,7,6,5,4,3,2,1,1,1,1]
        const result = getOptimalJoltages(joltages, N_BATTERIES)

        expect(result).toEqual(expected)
    })

    it("case 2", () => {
        const joltages = [8,1,1,1,1,1,1,1,1,1,1,1,1,1,9]
        const expected = [8,1,1,1,1,1,1,1,1,1,1,9]
        const result = getOptimalJoltages(joltages, N_BATTERIES)

        expect(result).toEqual(expected)
    })

    it("case 3", () => {
        const joltages = [2,3,4,2,3,4,2,3,4,2,3,4,2,7,8]
        const expected = [4,3,4,2,3,4,2,3,4,2,7,8]
        const result = getOptimalJoltages(joltages, N_BATTERIES)

        expect(result).toEqual(expected)
    })

    it("case 4", () => {
        const joltages = [8,1,8,1,8,1,9,1,1,1,1,2,1,1,1]
        const expected = [8,8,8,9,1,1,1,1,2,1,1,1]
        const result = getOptimalJoltages(joltages, N_BATTERIES)

        expect(result).toEqual(expected)
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
