import { sum } from "../sum";

test("check sum of 2 positive integers",()=>{
    expect(sum(2,5)).toBe(7);
});