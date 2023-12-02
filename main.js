document.addEventListener("DOMContentLoaded", function () {
  const displayInput = document.querySelector(".input");
  const displayOutput = document.querySelector(".output");
  let input = "";

  function updateInput(value) {
    input += value;
    displayInput.textContent = input;
  }

  function updateOutput(value) {
    displayOutput.textContent = value;
  }

  document.querySelector(".red").addEventListener("click", function () {
    input = "";
    updateInput("");
    updateOutput("");
  });

  document.querySelector(".orange").addEventListener("click", function () {
    input = input.slice(0, -1);
    updateInput("");
  });

  const buttons = document.querySelectorAll(
    ".calculator button:not(.red):not(.orange):not(.equal)"
  );
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      updateInput(button.textContent);
    });
  });

  document.querySelector(".equal").addEventListener("click", function () {
    try {
      const result = eval(input);
      updateOutput(result); // Update input with the result for further calculations
    } catch (error) {
      updateOutput("Error");
    }
  });
});
