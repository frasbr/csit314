class ExpressionGenerator {
    add = (a, b) => {
        // returns an expression string which involves the addition of the two expressions provided
        const [one, two] = this.encapsulateExpressions([a, b]);
        return `${one} + ${two}`;
    };

    subtract = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        return `${one} - ${two}`;
    };

    multiply = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        return `${one} * ${two}`;
    };

    divide = (a, b) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        return `${one} / ${two}`;
    };

    sqrt = (num) => {
        const [one, two] = this.encapsulateExpressions([a, b]);
        return `sqrt(${num})`;
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
