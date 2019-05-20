describe('calculator.js', function() {
 // TODO: Specs!
 it('should add numbers to totals', function() {
    // TODO: Expectations 
   let mathSvc;
    if(props.environment == "PROD") {
      mathSvc = new MathSvc();
    } else {
      mathSvc = new MathSvcLocal();
    }
   
    const calculator = new Calculator(mathSvc);
    calculator.add(5);
    expect(calculator.total).toBe(5);
 });
 it('should subtract numbers from totals', function() {
    // TODO: Expectations 
    let mathSvc;
    if(props.environment == "PROD") {
      mathSvc = new MathSvc();
    } else {
      mathSvc = new MathSvcLocal();
    }
   
    const calculator = new Calculator(mathSvc);
    calculator.total = 30;
    calculator.subtract(5);

    expect(calculator.total).toBe(25);
 });
 it('should multiply total by number', function() {
    // TODO: Expectations 
    let mathSvc;
    if(props.environment == "PROD") {
      mathSvc = new MathSvc();
    } else {
      mathSvc = new MathSvcLocal();
    }
   
    const calculator = new Calculator(mathSvc);
    calculator.total = 3;
    calculator.multiply(5);

    expect(calculator.total).toBe(15);
 });
 it('should divide total by number', function() {
    // TODO: Expectations 
    let mathSvc;
    if(props.environment == "PROD") {
      mathSvc = new MathSvc();
    } else {
      mathSvc = new MathSvcLocal();
    }
   
    const calculator = new Calculator(mathSvc);
    calculator.total = 15;
    calculator.divide(3);

    expect(calculator.total).toBe(5);
 });
});