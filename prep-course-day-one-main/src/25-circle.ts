export {};

function Circle(radius) {

  this.radius = radius;

  this.area = function() {
    return (Math.PI * Math.pow(radius, 2)).toFixed(2)
  };
  
  this.perimeter = function() {
    return (Math.PI * radius * 2).toFixed(2)
  };
}

const c = new Circle(3);
console.log("Area =", c.area()); // Expected output: Area = 28.27, Площадь круга = Pi * r^2
console.log("Perimeter =", c.perimeter()); // Expected output: Perimeter = 18.85, периметр круга = 2 * r * Pi
