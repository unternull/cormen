import { insertionSort } from "./insertionSort.ts";
import { Comparator } from './comparators.ts';
import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";

const descendingOrderComparator: Comparator = (a, b) => b - a;

Deno.test("Should not change input value", () => {
  const expectedValue = [10, 9, 8, 7, 6];
  const input = Array.from(expectedValue);

  insertionSort(input);

  assertEquals(input, expectedValue);
});

Deno.test('Sort in ascending order. Positive numbers.', () => {
  assertEquals(insertionSort([10, 9, 8, 7, 6]), [6, 7, 8, 9, 10]);
});

Deno.test('Sort in ascending order. Negative numbers.', () => {
  assertEquals(insertionSort([-10, -9, -8, -7, -6]), [-10, -9, -8, -7, -6]);
});

Deno.test('Sort in ascending order.', () => {
  assertEquals(insertionSort([3.2, 1, -10, -0.2]), [-10, -0.2, 1, 3.2]);
});

Deno.test('Sort in descending order.', () => {
  assertEquals(
    insertionSort([10, 9, 8, 7, 6], descendingOrderComparator),
    [10, 9, 8, 7, 6],
  );
});