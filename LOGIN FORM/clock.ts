// location
let position = document.getElementsByClassName("location");
let positions = position as unknown as HTMLCollectionOf<HTMLElement>;
let currentlocation = "Current Location is Karachi,Pakistan";
positions[0].innerHTML = currentlocation;

// setting time
let year = document.getElementsByClassName(
  "year"
) as HTMLCollectionOf<HTMLElement>;
let month = document.getElementsByClassName(
  "month"
) as HTMLCollectionOf<HTMLElement>;
let dates = document.getElementsByClassName(
  "date"
) as HTMLCollectionOf<HTMLElement>;
let day = document.getElementsByClassName(
  "day"
) as HTMLCollectionOf<HTMLElement>;
let hour = document.getElementsByClassName(
  "hour"
) as HTMLCollectionOf<HTMLElement>;
let minute = document.getElementsByClassName(
  "minute"
) as HTMLCollectionOf<HTMLElement>;
let second = document.getElementsByClassName(
  "second"
) as HTMLCollectionOf<HTMLElement>;
let millisecond = document.getElementsByClassName(
  "millisecond"
) as HTMLCollectionOf<HTMLElement>;

// creating array of month and week
let weekArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesady",
  "Thursday",
  "Friday",
  "Saturday",
];

let monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//updating time every seconds

const updateTime = () => {
  // getting time and allocating into variable
  let date = new Date();

  let years = date.getFullYear();
  let months = monthArray[date.getMonth()];
  let dt = date.getDate();
  let days = weekArray[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let milliseconds = date.getMilliseconds();

  //setting Innertext

  year[0].innerHTML = `${years}`;
  month[0].innerHTML = `${months}`;
  dates[0].innerHTML = `${dt}`;
  day[0].innerHTML = `${days}`;
  hour[0].innerHTML = `${hours}`;
  minute[0].innerHTML = `${minutes}`;
  second[0].innerHTML = `${seconds}`;
  millisecond[0].innerHTML = `${milliseconds}`;
};

setInterval(updateTime, 1000);
