function Javabuzz() {

}
// FUNCTION AS A CLASS DECLARATION
// It declares a new class called "Javabuzz"
// To instantiate an instance of this class we would need to do
// => var javabuzz = new Javabuzz()
//
// You can also declare a class by doing this:
// => var Javabuzz = function() {
//    }

  Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
    return (number % divisor === 0);
  };
// FUNCTION TO DEFINE A METHOD
// This pattern looks like the below:
// => [Classname].[prototype].[methodName](function() {
// =>   [code for the method goes here]
// => });
//
// The "_" prefixing "isDivisibleBy" signals that this is a PRIVATE
// method, i.e. one that is ONLY available WITHIN the class.


  Javabuzz.prototype.isDivisibleByThree = function(number) {
    return this._isDivisibleBy(number, 3);
  };

  Javabuzz.prototype.isDivisibleByFive = function(number) {
    return this._isDivisibleBy(number, 5);
  };

  Javabuzz.prototype.isDivisibleByFifteen = function(number) {
    return this._isDivisibleBy(number, 15);
  };

  Javabuzz.prototype.says = function(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "Javabuzz";
    };
    if (this.isDivisibleByFive(number)) {
      return "Buzz";
    };
    if (this.isDivisibleByThree(number)) {
      return "Java";
    };
  };
