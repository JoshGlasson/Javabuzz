describe("JavaBuzz", function() {

  var javabuzz;

  beforeEach(function() {
     javabuzz = new Javabuzz();
   });

  describe("knows when a number is", function() {

    it('divisible by 3',function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleBy(3, 3)).toBe(true);
    });

    it('divisible by 5',function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleBy(5, 5)).toBe(true);
    });

    it('divisible by 3 and 5',function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.isDivisbleByFifteen(15)).toBe(true);
    });
  });


  describe('when playing, says', function() {
    it('"Fizz" when divisible by 3', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.says(3)).toEqual("Fizz");
    });

    it('"Buzz" when divisible by 5', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"Fizzbuzz" when divisible by 15', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.says(15)).toEqual("Fizzbuzz");
    });

    it('number when not divisible by 3, 5 or 15', function() {
      // javabuzz = new Javabuzz();
      expect(javabuzz.says(1)).toEqual(1);
    });
  });
});
