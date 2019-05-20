class Calculator {
  constructor(mathSvc) {
    this.total = 0
    this.mathSvc = mathSvc;
  }
  
  add(number) {
    this.total = this.mathSvc.add(this.total, number);
    return this.total;
  }
  
  subtract(number) {
    this.total = this.mathSvc.subtract(this.total, number);
    return this.total;
  }
  
  multiply(number) {
    this.total = this.mathSvc.multiply(this.total, number);
    return this.total;
  }
  
  divide(number) {
    if (number === 0) {
      throw new Error('Cannot Divide By Zero');
    }
    
    this.total = this.mathSvc.divide(this.total, number);
    return this.total;
  }
}