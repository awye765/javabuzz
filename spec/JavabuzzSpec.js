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


  describe('knows when a number is', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3 and 5', function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

  describe('when playing, says', function() {
    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });
  });

  describe('when playing, says', function() {
    it('"Java" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });
  });

  describe('when playing, says', function() {
    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz");
    });
  });

});
