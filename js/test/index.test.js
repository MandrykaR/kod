import { getEvenNumbers } from "../index.js";

it('should get only even', () => {
    const result = getEvenNumbers([1, 2, 4, 5]);
    expect(result).toEqual([2, 4])
})