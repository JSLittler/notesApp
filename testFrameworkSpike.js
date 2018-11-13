

Test = function(d, i, x, matcher, y) {
  this.d = d;
  this.i = i;
  this.x = x;
  this.matcher = matcher;
  this.y = y;

}

Test.prototype.toEqual = function() {
  if (this.x === this.y) {
    this.d + " :" + this.i + " test passed.";
  } else {
    this.d + " :" + this.i + " test failed. Expected " + this.x + " to equal " + this.y;
  }
};
