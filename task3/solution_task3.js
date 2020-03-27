function Calculator(initialValue) {
  this.result = initialValue || 0;  // The same is -> this.result = initialValue ? initialValue : 0
}

Calculator.prototype.add = function (n) { this.result += n; };
Calculator.prototype.multiply = function (n) { this.result *= n; };
Calculator.prototype.getValue = function () { return this.result; };
Calculator.prototype.reset = function () { this.result = 0; };
