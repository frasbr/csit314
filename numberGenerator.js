class NumberGenerator {
    randomInt = (max) => {
        // Generate a random integer between 0 and `max`
        return Math.floor(Math.random() * max);
    };

    randomInt = (max, min) => {
        // Generate a random integer between `min` and `max`
        return Math.floor(Math.random() * Math.floor(max) + Math.ceil(min));
    };

    randomNum = (max) => {
        // Generate a random float between 0 and `max`
        return Math.random() * max;
    };

    randomNum = (min, max) => {
        // Generate a random float between `min` and `max`
        return Math.random() * max + min;
    };
}

module.exports = NumberGenerator;
