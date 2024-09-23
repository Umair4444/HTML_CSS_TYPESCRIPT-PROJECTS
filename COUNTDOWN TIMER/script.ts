//input area
let hoursinput = document.getElementById("hours-counter") as HTMLInputElement;
let minutesinput = document.getElementById(
  "minutes-counter"
) as HTMLInputElement;
let secondsinput = document.getElementById(
  "seconds-counter"
) as HTMLInputElement;
// console.log(hoursinput);
// console.log(minutesinput);

// buttons
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");
let setButton = document.getElementById("set");
// console.log(start);
// console.log(set);

// display area
let hoursel = document.getElementsByClassName(
  "hours"
) as HTMLCollectionOf<HTMLElement>;
let minutesel = document.getElementsByClassName(
  "minutes"
) as HTMLCollectionOf<HTMLElement>;
let secondsel = document.getElementsByClassName(
  "seconds"
) as HTMLCollectionOf<HTMLElement>;
console.log(hoursel);
console.log(minutesel);

let date = new Date();

// let setfunc = () => {
//   hoursel[0].innerHTML = `${hoursinput ? Number(hoursinput) : ""}`;
//   minutesel[0].innerHTML = `${minutesel ? Number(hoursinput) : ""}`;
//   secondsel[0].innerHTML = `${secondsel ? Number(hoursinput) : ""}`;
// };

// let setfunc = () => {
//   if (hoursinput && minutesinput && secondsinput) {
//     // Update the displayed hours, minutes, and seconds

//     let hours = `${Number(hoursinput.value) || 0}`.padStart(2, "0");
//     let minutes = `${Number(minutesinput.value) || 0}`.padStart(2, "0");
//     let seconds = `${Number(secondsinput.value) || 0}`.padStart(2, "0");

//     // seconds = seconds.length < 2 ? "0" + seconds : seconds;

//     hoursel[0].innerHTML = hours;
//     minutesel[0].innerHTML = minutes;
//     secondsel[0].innerHTML = seconds;
//   }
// };

let setfunc = () => {
  if (hoursinput && minutesinput && secondsinput) {
    // Convert input values to numbers for calculation
    let hoursNum = Number(hoursinput.value) || 0;
    let minutesNum = Number(minutesinput.value) || 0;
    let secondsNum = Number(secondsinput.value) || 0;

    // Decrement the hours if applicable
    if (hoursNum > 0) {
      hoursNum--;
      minutesNum = Math.floor(hoursNum / 60);
      secondsNum = Math.floor(hoursNum % 60);
    }

    // Convert numbers back to strings, padding with "0" for single digits
    let hours = hoursNum.toString().padStart(2, "0");
    let minutes = minutesNum.toString().padStart(2, "0");
    let seconds = secondsNum.toString().padStart(2, "0");

    // Update the display elements
    hoursel[0].innerHTML = hours;
    minutesel[0].innerHTML = minutes;
    secondsel[0].innerHTML = seconds;
  }
};

if (setButton) {
  setButton.addEventListener("click", setfunc);
} else {
  console.log("Set button not found!");
}
