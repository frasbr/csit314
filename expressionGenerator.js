class ExpressionGenerator {
    add = (a, b) => {
        // returns an expression string which involves the addition of the two expressions provided
        const [one, two] = this.encapsulateExpressions([a, b]);
        const string = `${one} + ${two}`;
        return {
            string,
            result: eval(string),
        };
    };

    subtract = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        const string = `${one} - ${two}`;
        return {
            string,
            result: eval(string),
        };
    };

    multiply = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        const string = `${one} * ${two}`;
        return {
            string,
            result: eval(string),
        };
    };

    divide = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        const string = `${one} / ${two}`;
        return {
            string,
            result: eval(string),
        };
    };

    sqrt = (num) => {
        const [expr] = this.encapsulateExpressions([num]);
        const string = `sqrt(${expr})`;
        const evalString = `Math.sqrt(eval(${expr}))`;
        return {
            string,
            result: eval(evalString),
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
