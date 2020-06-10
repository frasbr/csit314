class ExpressionGenerator {
    add = (a, b) => {
        // returns an expression string which involves the addition of the two expressions provided
        const [one, two] = this.encapsulateExpressions([a, b]);
        const string = `${one} + ${two}`;
        return {
            string,
            result: eval(string),
            title: "Addition",
        };
    };

    subtract = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        const string = `${one} - ${two}`;
        return {
            string,
            result: eval(string),
            title: "Subtraction",
        };
    };

    multiply = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        const string = `${one} * ${two}`;
        return {
            string,
            result: eval(string),
            title: "Multiplication",
        };
    };

    divide = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        const string = `${one} / ${two}`;
        return {
            string,
            result: eval(string),
            title: "Division",
        };
    };

    sqrt = (num) => {
        const [expr] = this.encapsulateExpressions([num]);
        const string = `sqrt(${expr})`;
        const evalString = `Math.sqrt(eval(${expr}))`;
        return {
            string,
            result: eval(evalString),
            title: "Square root",
        };
    };

    pow = (num, pow) => {
        const [a, n] = this.encapsulateExpressions([num, pow]);
        const string = `${a} ^ ${n}`;
        const evalString = `Math.pow(eval(${a}),eval(${n}))`;
        return {
            string,
            result: eval(evalString),
            title: "Exponents (Powers)",
        };
    };

    encapsulateExpression = (expr) => {
        if (typeof expr === "string") {
            // if an expression string is passed through then wrap it in parenthesis
            return `(${expr})`;
        } else {
            // it must be a number so leave it alone
            return expr;
        }
    };

    encapsulateExpressions = (arr) => {
        return arr.map((expr) => this.encapsulateExpression(expr));
    };
}

module.exports = ExpressionGenerator;
