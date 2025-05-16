function updateClock() {
  //Johanessburg

  let joburgElement = document.querySelector("#johanessburg");
  if (joburgElement) {
    let joburgElementDate = joburgElement.querySelector(".date");
    let joburgElementTime = joburgElement.querySelector(".time");

    joburgElementDate.innerHTML = moment()
      .tz("Africa/Johannesburg")
      .format("MMMM Do YYYY");
    joburgElementTime.innerHTML = moment()
      .tz("Africa/Johannesburg")
      .format("H:mm:ss [<small>] a [</small>]");
  }
  //Maldives

  let maldivesElement = document.querySelector("#maldives");
  if (maldivesElement) {
    let maldivesElementDate = maldivesElement.querySelector(".date");
    let maldivesElementTime = maldivesElement.querySelector(".time");

    maldivesElementDate.innerHTML = moment()
      .tz("Indian/Maldives")
      .format("MMMM Do YYYY");
    maldivesElementTime.innerHTML = moment()
      .tz("Indian/Maldives")
      .format("H:mm:ss [<small>] a [</small>]");
  }

  //Paris
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoElementDate = tokyoElement.querySelector(".date");
    let tokyoElementTime = tokyoElement.querySelector(".time");

    tokyoElementDate.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("MMMM Do YYYY");
    tokyoElementTime.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("H:mm:ss [<small>] a [</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current-location") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let updateCityElement = document.querySelector("#update-city");
  updateCityElement.innerHTML = `
   <div class="city city-2">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss [<small>] a [</small>]"
          )}</div>
        </div>
  `;
}

updateClock();
setInterval(updateClock, 1);

let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);
