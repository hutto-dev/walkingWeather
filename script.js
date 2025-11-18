const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const sky = document.getElementById("sky");
const wind = document.getElementById("wind");

function weather() {
  wind.textContent = "It's reallyyyyy windy";
}

weather();

const url = "https://worldtimeapi.org/api/timezone/America/New_York";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
