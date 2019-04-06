const perceptron = require("./perceptron");

// initialize testing variables
var p = new perceptron();
inputs = [-1, 0.5];

test("Tests perception outputs int", () => {
  // expects a number (!NotaNumber)
  expect(p.guess(inputs)).not.toBeNaN();
});
