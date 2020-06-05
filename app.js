const EG = require("./expressionGenerator");
const axios = require("axios");

const eg = new EG();

const array = [];

array.push(eg.add("10 + 6", 4));
array.push(eg.subtract(10, "2 + 2"));
array.push(eg.multiply(7, 7));
array.push(eg.divide(10, 2));
array.push(eg.sqrt(100));

const arrayToPost = array.map((expr) => expr.string);

axios
    .post(`http://api.mathjs.org/v4/`, {
        expr: arrayToPost,
    })
    .then(({ data }) => {
        array.forEach((expression, i) => {
            console.log("input: ", expression.string);
            console.log("output: ", data.result[i]);
            console.log("expected: ", expression.result);
            Number(data.result[i]) === expression.result
                ? console.log("correct\n")
                : console.log("incorrect\n");
        });
    })
    .catch((err) => {
        console.log(err);
    });
