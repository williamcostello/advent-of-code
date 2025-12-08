import { getAdjacentCells } from "./04";
import {expect, describe, it} from "vitest";

describe("getAdjacentCells", () => {
    it("should return adjacent cells", () => {
        const input = [
            ["a", "b", "c", "d"],
            ["e", "f", "g", "h"],
            ["i", "j", "k", "l"],
        ]

        const expected = ["a", "b", "c", "e", "g", "i", "j", "k"]

        const result = getAdjacentCells(input, 1)

        expect(result).toEqual(expected)
    })
});