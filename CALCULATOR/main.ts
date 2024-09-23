let display = document.getElementById("inputBox")! as HTMLInputElement;
let buttons = document.querySelectorAll("button"); // Select all button elements
// let buttons = document.querySelectorAll("button:not(.equal-btn)"); // Select all buttons except "=" button

if (display) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      display.classList.remove("highlight-placeholder");
    });
  });
}

let equalButton = document.querySelector(".equal-btn");
if (equalButton && display) {
  equalButton.addEventListener("click", () => {
    display.classList.add("highlight-placeholder");
  });
}
// let acButton = document.querySelector(".ac"); // Assuming "AC" button has class "ac-btn"
// if (acButton && display) {
//   acButton.addEventListener("click", () => {
//     display.classList.remove("highlight-placeholder");
//   });
// }

function clearLastCharacter() {
  if (display.value.length > 0) {
    display.value = display.value.substring(0, display.value.length - 1); // Remove last character from input box value
  }
}

if (buttons.length > 0) {
  let buttonArray = Array.from(buttons); // Convert NodeList to an array

  buttonArray.forEach((element) => {
    element.addEventListener("click", (event) => {
      let target = event.target as HTMLElement;
      if (target) {
        let buttonValue = target.innerHTML;
        if (buttonValue === "AC") {
          display.value = ""; // Clear the input box
        } else if (buttonValue === "CLEAR") {
          clearLastCharacter(); // Remove the last character from the input box
        } else if (buttonValue === "=") {
          try {
            display.value = eval(display.value); // Evaluate the expression and update the input box value
          } catch (error) {
            console.error("Invalid expression:", error);
            display.value = "Error"; // Display "Error" if the expression is invalid
          }
        } else {
          display.value += buttonValue; // Append button text to input box value
        }
      } else {
        console.error("Event target is not an HTMLElement.");
      }
    });
  });
} else {
  console.error("No button elements found.");
}
