import { Comparator, ascendingComparator } from './comparators.ts';

type MergeSortOptions = {
    l: number,
    r: number,
    comparator: Comparator
}

export function merge(
    input: number[],
    lowerIndex: number,
    middleIndex: number,
    upperIndex: number,
    comparator: Comparator = ascendingComparator
) {
    const arrALength = middleIndex - lowerIndex + 1;
    const arrBLength = upperIndex - middleIndex;
    const arrA = input.slice(lowerIndex, lowerIndex + arrALength);
    const arrB = input.slice(lowerIndex + arrALength, lowerIndex + arrALength + arrBLength);

    let i = lowerIndex;
    let idxA = 0;
    let idxB = 0;
    while (i <= upperIndex) {
        while (idxA < arrALength &&
            (idxB >= arrBLength || comparator(arrA[idxA], arrB[idxB]) < 0)
        ) {
            input[i] = arrA[idxA];
            ++idxA;
            ++i;
        }
        while (idxB < arrBLength &&
            (idxA >= arrALength || comparator(arrA[idxA], arrB[idxB]) >= 0)
        ) {
            input[i] = arrB[idxB];
            ++idxB;
            ++i;
        }
    }
}

function mutableMergeSort(input: number[], {
    l,
    r,
    comparator
}: MergeSortOptions) {
    if (l < r) {
        const middle = Math.floor((r + l) / 2);
        mutableMergeSort(input, { l, r: middle, comparator });
        mutableMergeSort(input, { l: middle + 1, r, comparator });
        merge(input, l, middle, r, comparator );
    }
}

export function mergeSort(
    input: number[],
    comparator: Comparator = ascendingComparator
) {
    const output = Array.from(input);
    mutableMergeSort(output, {
        l: 0,
        r: output.length - 1,
        comparator
    });

    return output;
}