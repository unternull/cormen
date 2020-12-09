export type Comparator = (a: number, b: number) => number;
export const ascendingComparator: Comparator = (a, b) => a - b;
export const descendingComparator: Comparator = (a, b) => b - a;

