import { merge, mergeSort } from "./mergeSort.ts";
import { descendingComparator } from "./comparators.ts";
import { assertEquals } from "https://deno.land/std@0.79.0/testing/asserts.ts";

Deno.test('Merge. Arrays with equal length', () => {
    const array = [1,2,3,1,2,3];

    merge(array, 0, 2, 5);

    assertEquals(array, [1,1,2,2,3,3]);
});

Deno.test('Merge. Arrays with one symbol length', () => {
    const array = [2,1];

    merge(array, 0, 0, 1);

    assertEquals(array, [1,2]);
});

Deno.test('Merge. Left array is longer', () => {
    const array = [1,2,3,4,1,2,3];

    merge(array, 0, 3, 6);

    assertEquals(array, [1,1,2,2,3,3,4]);
});

Deno.test('Merge. Right array is longer', () => {
    const array = [1,2,3,1,2,3,4];

    merge(array, 0, 2, 6);

    assertEquals(array, [1,1,2,2,3,3,4]);
});

Deno.test('Merge. Merge right part', () => {
    const array = [1,2,3,3,4,1,2];

    merge(array, 3, 4, 6);

    assertEquals(array, [1,2,3,1,2,3,4]);
});

Deno.test('Merge sort. Sort array with even number of elements', () => {
    assertEquals(mergeSort([5, 4, 2, 1]), [1, 2, 4, 5]);
});

Deno.test('Merge sort. Sort array with odd number of elements', () => {
    assertEquals(mergeSort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5]);
});

Deno.test('Merge sort. Sort sorted array', () => {
    assertEquals(mergeSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
});

Deno.test('Merge sort. Sort array with in descending order', () => {
    assertEquals(mergeSort(
            [3, 1, 7, 5, 9],
            descendingComparator
        ),
        [9, 7, 5, 3, 1]
    );
});