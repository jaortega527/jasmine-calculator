class Calculator {
    constructor() {
        this.total = 0;
    }
    add(number) {
        return this.total += number;
    }
    subtract(number) {
        return this.total -= number;
    }
    multiply(number) {
        return this.total *= number;
    }
    divide(number) {
        if (number === 0 ) {
            throw new Error ('Cannot Divide By Zero');
        }
        
        return this.total /= number;
    }
}

