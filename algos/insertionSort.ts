export type Comparator = (a: number, b: number) => number;
const defaultComparator: Comparator = (a , b) => a - b;

export function insertionSort(input: number[], comparator: Comparator = defaultComparator) : number[] {
    const output = Array.from(input);
    for (
        let nextToInsert = 1;
        nextToInsert < output.length;
        ++nextToInsert
    ) {
        let nextToShift = nextToInsert;
        const valutToInsert = output[nextToInsert];
        while(
            nextToShift > 0 &&
            comparator(valutToInsert, output[nextToShift - 1]) < 0
        ) {
            output[nextToShift] = output[nextToShift - 1];
            --nextToShift;
        }

        if (nextToInsert !== nextToShift) {
            output[nextToShift] = valutToInsert;
        }
    }

    return output;
}
