const qs = require("./quickSort");

// initialize testing arrays
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [2, 4, 5, 3, 4, 4, 9, 0];
const bS = [0, 2, 3, 4, 4, 4, 5, 9];
const c = [2, 2, 2, 2, 2, 2, 2];
const d = [5, 2, 1, 7, 8, 0, 9, 3, 6, 4];
const dS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const e = [0, 2, 4, 6, 9, 8, 2, 1];
const eS = [0, 2, 2, 6, 9, 8, 4, 1];

test("sorts already sorted array", () => {
  expect(qs.quickSort(a, 0, a.length - 1)).toEqual(a);
});

test("sorts array with multiple repeated int", () => {
  expect(qs.quickSort(b, 0, b.length - 1)).toEqual(bS);
});

test("sorts array with all the same int", () => {
  expect(qs.quickSort(c, 0, c.length - 1)).toEqual(c);
});

test("sorts random array", () => {
  expect(qs.quickSort(d, 0, d.length - 1)).toEqual(dS);
});

test("swaps two array integers in place", () => {
  qs.swap(e, 2, 6);
  expect(e).toEqual(eS);
});
