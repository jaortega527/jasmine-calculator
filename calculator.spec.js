describe('calculator.js', function() {
 // TODO: Specs!
 it('should add numbers to totals', function() {
    // TODO: Expectations 
    const calculator = new Calculator();
    calculator.add(5);
    expect(calculator.total).toBe(5);
 });
 it('should subtract numbers from totals', function() {
    // TODO: Expectations 
    const calculator = new Calculator();
    calculator.total = 30;
    calculator.subtract(5);

    expect(calculator.total).toBe(25);
 });
 it('should multiply total by number', function() {
    // TODO: Expectations 
    const calculator = new Calculator();
    calculator.total = 3;
    calculator.multiply(5);

    expect(calculator.total).toBe(15);
 });
 it('should divide total by number', function() {
    // TODO: Expectations 
    const calculator = new Calculator();
    calculator.total = 15;
    calculator.divide(3);

    expect(calculator.total).toBe(5);
 });
});