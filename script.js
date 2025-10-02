const input1 = Number(document.querySelector(".input-1").value);
const input2 = Number(document.querySelector(".input-2").value);

// label
const resultArea = document.querySelector(".result");
const resultPerimeter = document.querySelector(".result-perimeter");
// button

// calc Area
const calcArea = document.querySelector(".calc-area");
calcArea.addEventListener("click", () => {
  const result = input1 * input2;
  resultArea.textContent = `calculated Area is ${result}`;
});

// calc perimeter
const calcPerimeter = document.querySelector(".calc-perimeter");
calcPerimeter.addEventListener("click", () => {
  const result = (input1.value + input2.value) * 2;
  resultArea.textContent = `calculated perimeter is ${result}`;
});

// calc average
const calcAverage = document.querySelector(".calc-average");
calcAverage.addEventListener("click", () => {
  const result = (input1.value + input2.value) / 2;
  resultArea.textContent = `calculated average is ${result}`;
});
