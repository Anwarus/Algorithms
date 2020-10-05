const algorithm = (function algorithm() {
    const linearSearch = function linearSearch(value, array) {
        for (let i = 0; i < array.length; i += 1) if (array[i] === value) return i;
        return -1;
    };

    const binarySearch = function binarySearch(value, array) {
        let lb = 0;
        let ub = array.length - 1;

        do {
            const midPoint = Math.floor(lb + (ub - lb) / 2);
            const midValue = array[midPoint];

            if (midValue < value) lb = midPoint + 1;
            else if (midValue > value) ub = midPoint - 1;
            else if (midValue === value) return midPoint;
        } while (lb <= ub);

        return -1;
    };

    const interpolationSearch = function interpolationSearch(value, array) {
        let lb = 0;
        let ub = array.length - 1;

        while (lb < ub && value >= array[lb] && value <= array[ub]) {
            const pos =
                lb + Math.floor(((ub - lb) / (array[ub] - array[lb])) * (value - array[lb]));
            const posValue = array[pos];

            if (posValue < value) lb = pos + 1;
            else if (posValue > value) ub = pos - 1;
            else if (posValue === value) return pos;
        }

        return -1;
    };

    const bubbleSort = function bubbleSort(array) {
        const clone = array.slice(0);
        let swapped = true;

        while (swapped) {
            swapped = false;

            for (let i = 0; i < clone.length - 1; i += 1) {
                if (clone[i] > clone[i + 1]) {
                    const tmp = clone[i];
                    clone[i] = clone[i + 1];
                    clone[i + 1] = tmp;
                    swapped = true;
                }
            }
        }

        return clone;
    };

    const insertionSort = function insertionSort(array) {
        const clone = array.slice(0);

        for (let i = 1; i < clone.length; i += 1) {
            for (let j = i - 1; j >= 0; j -= 1) {
                if (clone[j + 1] > clone[j]) break;
                else {
                    const tmp = clone[j + 1];
                    clone[j + 1] = clone[j];
                    clone[j] = tmp;
                }
            }
        }

        return clone;
    };

    const selectionSort = function selectionSort(array) {
        const clone = array.slice(0);

        for (let i = 0; i < clone.length - 1; i += 1) {
            for (let j = i + 1; j < clone.length; j += 1) {
                if (clone[j] < clone[i]) {
                    const tmp = clone[j];
                    clone[j] = clone[i];
                    clone[i] = tmp;
                }
            }
        }

        return clone;
    };

    const mergeSort = function mergeSort(array) {
        const clone = array.slice(0);
        const merged = [];

        if (clone.length > 1) {
            const mid = Math.floor(clone.length / 2);
            const left = clone.slice(0, mid);
            const right = clone.slice(mid, clone.length);

            const leftSorted = mergeSort(left);
            const rightSorted = mergeSort(right);

            let leftIndex = 0;
            let rightIndex = 0;

            while (true) {
                if (leftIndex === leftSorted.length && rightIndex === rightSorted.length) break;
                else if (leftIndex === leftSorted.length) {
                    merged.push(rightSorted[rightIndex]);
                    rightIndex += 1;
                } else if (rightIndex === rightSorted.length) {
                    merged.push(leftSorted[leftIndex]);
                    leftIndex += 1;
                } else if (leftSorted[leftIndex] < rightSorted[rightIndex]) {
                    merged.push(leftSorted[leftIndex]);
                    leftIndex += 1;
                } else {
                    merged.push(rightSorted[rightIndex]);
                    rightIndex += 1;
                }
            }
        } else return clone;

        return merged;
    };

    return {
        linearSearch,
        binarySearch,
        interpolationSearch,
        bubbleSort,
        insertionSort,
        selectionSort,
        mergeSort
    };
})();

module.exports = algorithm;
