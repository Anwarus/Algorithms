const algorithm = {
    linearSearch: function linearSearch(value, array) {
        for (let i = 0; i < array.length; i += 1) if (array[i] === value) return i;

        return -1;
    },
    binarySearch: function binarySearch(value, array) {
        let lowerBound = 0;
        let upperBound = array.length;

        do {
            const midPoint = Math.floor(lowerBound + (upperBound - lowerBound) / 2);
            const midValue = array[midPoint];

            if (value > midValue) lowerBound = midPoint + 1;
            else if (value < midValue) upperBound = midPoint - 1;
            else if (midValue === value) return midPoint;
        } while (lowerBound < upperBound);

        return -1;
    }
};

module.exports = algorithm;
