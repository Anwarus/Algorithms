const algorithm = {
    linearSearch: function linearSearch(value, array) {
        for (let i = 0; i < array.length; i += 1) {
            if (array[i] === value) return i;
        }

        return -1;
    }
};

module.exports = algorithm;
