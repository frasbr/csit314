const fs = require("fs");
const EG = require("./expressionGenerator");
const NG = require("./numberGenerator");
const axios = require("axios");

(async function () {
    const eg = new EG();
    const ng = new NG();

    const stream = fs.createWriteStream("output.txt", { flags: "w" });

    // Create array of expressions to be sent for testing
    let array = [];

    // with known quantities
    array.push(eg.add("10 + 6", 4));
    array.push(eg.subtract(10, "2 + 2"));
    array.push(eg.multiply(7, 7));
    array.push(eg.divide(10, 2));
    array.push(eg.sqrt(100));
    array.push(eg.pow(2, 2));
    await testExpressions(
        array,
        "------------------\nWith static input\n------------------\n\n"
    );

    // with random numbers
    const rand1 = ng.randomInt(10);
    const rand2 = ng.randomInt(10);
    array = [];
    array.push(eg.add(rand1, rand2));
    array.push(eg.subtract(rand1, rand2));
    array.push(eg.multiply(rand1, rand2));
    array.push(eg.divide(rand1, rand2));
    array.push(eg.sqrt(rand1));
    array.push(eg.pow(rand1, rand2));
    await testExpressions(
        array,
        "\n------------------\nWith random input\n------------------\n\n"
    );

    // other functions
    array = [];
    array.push({
        string: "derivative('x^2 + x', 'x')",
        result: "2 * x + 1",
        title: "Derivative",
    });
    array.push({
        string: "12.7 cm in inches",
        result: "5 inches",
        title: "Unit conversion",
    });
    array.push({
        string: "pow([[-1, 2], [3, 1]], 2)",
        result: "[[7, 0], [0, 7]]",
        title: "Matrix operations",
    });
    await testExpressions(
        array,
        "\n------------------\nAdditional functions\n------------------\n\n"
    );

    async function testExpressions(expressionArray, title) {
        let expr = expressionArray.map((expr) => expr.string);
        axios
            .post("http://api.mathjs.org/v4/", {
                expr,
            })
            .then(({ data }) => {
                stream.write(title);
                expressionArray.forEach((expression, i) => {
                    let string = "operation: " + expression.title;
                    string += "\ninput: " + expression.string;
                    string += "\noutput: " + data.result[i];
                    string += "\nexpected: " + expression.result;
                    if (
                        Number(data.result[i]) === expression.result ||
                        data.result[i] === expression.result
                    ) {
                        string += "\ncorrect\n";
                    } else {
                        string += "\nincorrect\n";
                    }
                    string += "\n";
                    stream.write(string);
                });
            })
            .catch((err) => {
                console.log(err);
                console.log(expressionArray);
            });
    }
})();
