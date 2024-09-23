let btnValue = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".display") as HTMLInputElement;

//remove highlight placeholder
if (input) {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      input.classList.remove("highlight");
    });
  });
}

//add highlight placeholder
let equalbtn = document.querySelector(".equal") as HTMLButtonElement;
if (equalbtn && input) {
  equalbtn.addEventListener("click", () => {
    input.classList.add("highlight");
  });
}

let del = () => {
  if (input.value.length > 0) {
    input.value = input.value.substring(0, input.value.length - 1);
  }
};

Array.from(buttons).forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let target = event.target as HTMLElement;
    // console.log(target);

    if (target) {
      btnValue = target.innerHTML;
      // console.log(btnValue)
      input.value = input.value.slice(0, 9);
      if (btnValue == "=") {
        input.value = eval(input.value);
        console.log(input.value);
      } else if (btnValue == "x") {
        input.value += btnValue.replace("x", "*");
        console.log("click");
      } else if (btnValue == "Del") {
        del();
      } else if (btnValue == "C") {
        input.value = "";
      } else if (btnValue == "++") {
        input.value = eval(input.value) + 1;
      } else if (btnValue == "1/x") {
        input.value = `${1 / eval(input.value)}`;
        input.value = input.value.slice(0, 11);
      } else {
        input.value += btnValue;
      }
    }
  });
});
