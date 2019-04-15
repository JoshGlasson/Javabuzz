var Javabuzz = function () {};

Javabuzz.prototype.isDivisbleBy = function(number, divisor) {
  return number % divisor === 0;
};

Javabuzz.prototype.isDivisbleByFifteen = function(number) {
  return this.isDivisbleBy(number, 15);
};

Javabuzz.prototype.count = function() {
  var index = 1;
  while (index <= 100) {
    console.log(this.says(index));
    index++;
  };
};

Javabuzz.prototype.says = function(number) {
  if(this.isDivisbleBy(number, 15)) {
  return "Fizzbuzz";
    }
  if(this.isDivisbleBy(number, 3)) {
  return "Fizz";
    }
  if(this.isDivisbleBy(number, 5)) {
  return "Buzz";
    }
  return number
};
