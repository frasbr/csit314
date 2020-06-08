const EG = require("./expressionGenerator");
const eg = new EG();

// EXPRESSION STRING GENERATION

test("generates addition expression", () => {
    const exp = eg.add(1, 1);
    expect(exp.string).toBe("1 + 1");
});

test("generates subtraction expression", () => {
    const exp = eg.subtract(1, 1);
    expect(exp.string).toBe("1 - 1");
});

test("generates multiplication expression", () => {
    const exp = eg.multiply(1, 1);
    expect(exp.string).toBe("1 * 1");
});

test("generates division expression", () => {
    const exp = eg.divide(1, 1);
    expect(exp.string).toBe("1 / 1");
});

test("generates sqrt expression", () => {
    const exp = eg.sqrt(1);
    expect(exp.string).toBe("sqrt(1)");
});

// RESULT EVALUTATION

test("evaluates addition with numbers (5 + 5 = 10)", () => {
    const exp = eg.add(5, 5);
    expect(exp.result).toBe(10);
});

test("evaluates addition with expressions ('5 + 5' + 5 = 15)", () => {
    const exp = eg.add("5 + 5", 5);
    expect(exp.result).toBe(15);
});

test("evaluates subtraction with numbers (20 - 15 = 5)", () => {
    const exp = eg.subtract(20, 15);
    expect(exp.result).toBe(5);
});

test("evaluates subtraction with expressions ('5 + 5' - 5 = 5)", () => {
    const exp = eg.subtract("5 + 5", 5);
    expect(exp.result).toBe(5);
});

test("evaluates multiplication with numbers (5 * 5 = 25)", () => {
    const exp = eg.multiply(5, 5);
    expect(exp.result).toBe(25);
});

test("evaluates multiplication with expressions ('5 + 5' * 5 = 50)", () => {
    const exp = eg.multiply("5 + 5", 5);
    expect(exp.result).toBe(50);
});

test("evaluates division with numbers (10 / 5 = 2)", () => {
    const exp = eg.divide(10, 5);
    expect(exp.result).toBe(2);
});

test("evaluates division with expressions ('5 + 5' / 5 = 2)", () => {
    const exp = eg.divide("5 + 5", 5);
    expect(exp.result).toBe(2);
});

test("evaluates sqrt with number (sqrt(16) = 4)", () => {
    const exp = eg.sqrt(16);
    expect(exp.result).toBe(4);
});

test("evaluates sqrt with expression (sqrt('10 + 6'))", () => {
    const exp = eg.sqrt("10 + 6");
    expect(exp.result).toBe(4);
});
