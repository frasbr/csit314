class NumberGenerator {
    randomInt(one, two) {
        if (arguments.length === 2) {
            return Math.floor(Math.random() * Math.floor(two) + Math.ceil(one));
        } else if (arguments.length === 1) {
            return Math.floor(Math.random() * one);
        } else {
            throw TypeError("Invalid arguments");
        }
    }

    randomNum(one, two) {
        if (arguments.length === 2) {
            // Generate a random float between `one` and `two`
            return Math.random() * two + one;
        } else if (arguments.length === 1) {
            // Generate a random float between 0 and `one`
            return Math.random() * one;
        } else {
            throw TypeError("Invalid arguments");
        }
    }
}

module.exports = NumberGenerator;
