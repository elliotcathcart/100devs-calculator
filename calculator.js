class Calculator {
    constructor() {
    }

    compute(input) {
        let trimmedInput;
        for (let i = 0; i < input.length; i++) {
            if (input[i] !== '0') {
                trimmedInput = input.substring(i);
                break;
            }
        }
        return eval(trimmedInput);
    }
}