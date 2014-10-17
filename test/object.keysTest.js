function Pasta(grain, width, shape) {
    this.grain = grain;
    this.width = width;
    this.shape = shape;

    // Define a method.
    this.toString = function () {
        return (this.grain + ", " + this.width + ", " + this.shape);
    }
}

// Create an object.
var spaghetti = new Pasta("wheat", 0.2, "circle");

// Put the enumerable properties and methods of the object in an array.
var osclient = require('../lib/api');
var arr = Object.keys(osclient);
console.log(arr);
