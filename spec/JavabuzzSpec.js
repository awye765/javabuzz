describe('Javabuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });
  // Declares a local variable available only between the nearest {}

  describe('knows when a number is', function() {
  // Jasmine "describe" block used as equivalent to RSpec "context" syntax

    it('divisible by 3', function() {
  // Instantiates new instance of the Javabuzz class
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  // Same as RSpec "it" block with an "expect"
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });
});
