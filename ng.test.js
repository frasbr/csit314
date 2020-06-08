const NG = require("./numberGenerator");
const ng = new NG();

test("generates random number between 0 and 10", () => {
    // Generates 100 random numbers in order to test more robustly
    let failed = false;
    for (let i = 0; i < 100; i++) {
        let num = ng.randomNum(10);
        if (Number.isNaN(num) || num < 0 || num > 10) {
            failed = true;
            break;
        }
    }
    expect(failed).toBe(false);
});

test("generates a random integer between 0 and 10", () => {
    // Generates 100 random numbers in order to test more robustly
    let failed = false;
    for (let i = 0; i < 100; i++) {
        let num = ng.randomInt(10);
        if (
            Number.isNaN(num) ||
            !Number.isInteger(num) ||
            num < 0 ||
            num > 10
        ) {
            console.log("failed: ", num);
            failed = true;
            break;
        }
    }
    expect(failed).toBe(false);
});
