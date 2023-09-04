import { calculateTimer } from "./calculateTimer"

test("returns array with minutes and seconds", () => {
    expect(calculateTimer(120)).toEqual([2,0]);
    expect(calculateTimer(60)).toEqual([1,0]);
    expect(calculateTimer(70)).toEqual([1,10]);
    expect(calculateTimer(243)).toEqual([4,3]);
});