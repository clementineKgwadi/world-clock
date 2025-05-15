function updateClock() {
  //Johanessburg

  let joburgElement = document.querySelector("#johanessburg");
  let joburgElementDate = joburgElement.querySelector(".date");
  let joburgElementTime = joburgElement.querySelector(".time");

  joburgElementDate.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("MMMM Do YYYY");
  joburgElementTime.innerHTML = moment()
    .tz("Africa/Johannesburg")
    .format("H:mm:ss [<small>] a [</small>]");

  //Maldives

  let maldivesElement = document.querySelector("#maldives");
  let maldivesElementDate = maldivesElement.querySelector(".date");
  let maldivesElementTime = maldivesElement.querySelector(".time");

  maldivesElementDate.innerHTML = moment()
    .tz("Indian/Maldives")
    .format("MMMM Do YYYY");
  maldivesElementTime.innerHTML = moment()
    .tz("Indian/Maldives")
    .format("H:mm:ss [<small>] a [</small>]");

  //Paris
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoElementDate = tokyoElement.querySelector(".date");
  let tokyoElementTime = tokyoElement.querySelector(".time");

  tokyoElementDate.innerHTML = moment().tz("Asia/Tokyo").format("MMMM Do YYYY");
  tokyoElementTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("H:mm:ss [<small>] a [</small>]");
}

updateClock();
setInterval(updateClock, 1);
