class Calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }

    add(a, b){
      return a + b
    }

    divide(a, b){
      return a/b
    }
    multiply(a, b){
      return a * b
    }
}

let calculator = new Calculator()

module.exports = calculator;