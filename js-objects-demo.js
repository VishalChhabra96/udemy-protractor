let car = function() {
  this.name = "BMW";
  this.price = 10000;
  this.size = "xl";

  this.getData = function() {
      console.log("this is a car");
  }

};

module.exports = new car();

