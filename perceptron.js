/**
 * perception class
 * shoutout coding train!
 */
// activation function
function sign(n) {
  if (n >= 0) {
    return 1;
  } else {
    return -1;
  }
}
class perceptron {
  constructor() {
    this.weights = new Array(2);
    for (var i = 0; i < this.weights.length; i++) {
      this.weights[i] = Math.random() * 2 - 1;
    }
  }

  guess(inputs) {
    let sum = 0;
    for (var i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return sign(sum);
  }
}

function setup() {
  var p = new 
}

module.exports = perceptron;
