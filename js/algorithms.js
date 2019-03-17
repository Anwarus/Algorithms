const algorithm = {
    linearSearch: function linearSearch(value, array) {
        for (let i = 0; i < array.length; i += 1) if (array[i] === value) return i;
        return -1;
    },
    binarySearch: function binarySearch(value, array) {
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
    },
    interpolationSearch: function interpolationSearch(value, array) {
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
    },
    bubbleSort: function bubbleSort(array) {
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
    },
    insertionSort: function insertionSort(array) {
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
    }
};

module.exports = algorithm;
