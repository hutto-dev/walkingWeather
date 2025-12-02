let temp;
let sky;
let wind;
let description;
let tomorrow;
let dayTwo;
let dayThree;
let dayFour;
let tomorrowIcon;
let dayTwoIcon;
let dayThreeIcon;
let dayFourIcon;

// API LOGIC

async function getWeather() {
  const apiKey = "b95006171527bc6aa7da23b8a745c857";

  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=Harpers%20Ferry,US&units=imperial&appid=${apiKey}`;
  const weatherResponse = await fetch(weatherAPI);
  const weatherData = await weatherResponse.json();

  const forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?q=Harpers%20Ferry,US&units=imperial&appid=${apiKey}`;
  const forecastResponse = await fetch(forecastAPI);
  const forecastData = await forecastResponse.json();

  // UPDATE WEATHER INFO
  sky = weatherData.weather[0].main;
  temp = Math.round(weatherData.main.temp);
  wind = weatherData.wind.speed;
  description = weatherData.weather[0].description;
  description = description.charAt(0).toUpperCase() + description.slice(1);

  // UPDATE FORECAST INFO
  const forecastList = forecastData.list;
  const nextFourDays = forecastList
    .filter((item) => {
      return item.dt_txt.includes("12:00:00");
    })
    .slice(0, 4);

  tomorrow = `${Math.round(nextFourDays[0].main.temp)}°`;
  dayTwo = `${Math.round(nextFourDays[1].main.temp)}°`;
  dayThree = `${Math.round(nextFourDays[2].main.temp)}°`;
  dayFour = `${Math.round(nextFourDays[3].main.temp)}°`;

  ////////////////// working through this now
  // UPDATE FORECAST ICON

  tomorrowIcon = nextFourDays[0].weather[0].main;
  dayTwoIcon = nextFourDays[1].weather[0].main;
  dayThreeIcon = nextFourDays[2].weather[0].main;
  dayFourIcon = nextFourDays[3].weather[0].main;

  setWord();
  changeOverView();
  overviewSummary.textContent = getWalkingRules(sky, wind, temp);
  changeIconInfo();
  getFutureTemp();
  getFutureIcons();
}

getWeather();

// HEADER LOGIC

const headerDate = document.getElementById("header-date");

function getDate() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  headerDate.textContent = today;
}

getDate();

// RESULT WORD LOGIC

const resultWord = document.getElementById("result-word");

function setWord() {
  if (temp < 32 || wind >= 30 || sky === "Rain" || sky === "Snow") {
    resultWord.textContent = "No.";
  } else {
    resultWord.textContent = "YES!";
  }
}

setWord();

// OVERVIEW LOGIC

const overviewTitle = document.getElementById("temp-sky-wind");
const apiDescription = document.getElementById("api-description");
const overviewSummary = document.getElementById("daily-summary-p");

function changeOverView() {
  overviewTitle.textContent = `${temp}° // ${sky} // ${wind}mph wind`;
  apiDescription.textContent = description;
}

changeOverView();

// RULES FOR CONDITIONS & MESSAGES

function isBetween(value, min, max) {
  return (value >= min) & (value <= max);
}

const rules = [
  // SUNNY RULES

  {
    condition: (sky, wind, temp) => sky === "Clear" && wind < 20 && temp >= 50,
    message:
      "Now it seems that today is a GREAT day to walk! Today is the day the Lord has made so let us rejoice and be glad. Let's not be lazy little dorks and just go for a walk.",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clear" && isBetween(wind, 20, 30) && temp >= 50,
    message: "Boy oh boy..sunny but don't blow away!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clear" && isBetween(wind, 30, 40) && temp >= 50,
    message: "May not be a good idea but you could always get a tan",
  },
  {
    condition: (sky, wind, temp) => sky === "Clear" && wind > 40 && temp >= 50,
    message: "LOL..WHY ARE YOU WALKING IN THE TORNADO",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clear" && isBetween(wind, 0, 40) && temp < 20,
    message: "Freezing out here...no",
  },
  {
    condition: (sky, wind, temp) => sky === "Clear" && wind < 20 && temp <= 50,
    message:
      "Now it seems that today is a GOOD day to walk! It's maybe a little chilly but who cares! GO WALK!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clear" && isBetween(wind, 20, 30) && temp <= 50,
    message: "Not the warmest out here & it's a little windy..bundle up!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clear" && isBetween(wind, 30, 40) && temp <= 50,
    message: "You're probably cold and you need to go home if you're walking",
  },
  {
    condition: (sky, wind, temp) => sky === "Clear" && wind > 40 && temp <= 50,
    message: "LOL..WHY ARE YOU WALKING IN THE TORNADO & IT'S COLD!!",
  },

  // CLOUDS RULES

  {
    condition: (sky, wind, temp) => sky === "Clouds" && wind < 20 && temp >= 50,
    message:
      "Sun's not out...gun's not out..but you can still walk! It's a very nice day out if I say so myself",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clouds" && isBetween(wind, 20, 30) && temp >= 50,
    message: "Cloudy and windy?? Hmmm. Just go walk",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clouds" && isBetween(wind, 30, 40) && temp >= 50,
    message: "Dark & Windy?? Who knows! Walk if you want!",
  },
  {
    condition: (sky, wind, temp) => sky === "Clouds" && wind > 40 && temp >= 50,
    message: "LOL go inside",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clouds" && isBetween(wind, 0, 40) && temp < 20,
    message: "Cloudy & Cold? Go play Stardew Valley",
  },
  {
    condition: (sky, wind, temp) => sky === "Clouds" && wind < 20 && temp <= 50,
    message: "Cloudy & cool 😎 just like you. Bundle up and walk!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clouds" && isBetween(wind, 20, 30) && temp <= 50,
    message:
      "Now this is little cold...please bring your jacket for once in your life",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Clouds" && isBetween(wind, 30, 40) && temp <= 50,
    message: "Probably not...lol",
  },
  {
    condition: (sky, wind, temp) => sky === "Clouds" && wind > 40 && temp <= 50,
    message: "Please don't tell me you're walking in this...",
  },

  // RAIN RULES

  {
    condition: (sky, wind, temp) => sky === "Rain" && wind < 20 && temp >= 50,
    message: "I would actually be fun to walk in this..but you probably won't",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Rain" && isBetween(wind, 20, 30) && temp >= 50,
    message:
      "Probably skip the walk...you already sat on the beach once in the rain and walked the track in the rain...",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Rain" && isBetween(wind, 30, 40) && temp >= 50,
    message: "Rainy & Windy?? Nope",
  },
  {
    condition: (sky, wind, temp) => sky === "Rain" && wind > 40 && temp >= 50,
    message: "LOL go inside, what are you doing.",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Rain" && isBetween(wind, 0, 40) && temp < 20,
    message: "You're crazy, get inside",
  },
  {
    condition: (sky, wind, temp) => sky === "Rain" && wind < 20 && temp <= 50,
    message: "Rainy day, enjoy it!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Rain" && isBetween(wind, 20, 30) && temp <= 50,
    message: "Go inside, you're not an umbrella",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Rain" && isBetween(wind, 30, 40) && temp <= 50,
    message: "Rainy day, enjoy it!",
  },
  {
    condition: (sky, wind, temp) => sky === "Rain" && wind > 40 && temp <= 50,
    message: "Literally walking in a tornado",
  },

  // SNOW RULES
  {
    condition: (sky, wind, temp) =>
      sky === "Snow" && isBetween(wind, 0, 40) && temp < 20,
    message: "It's way too cold for this and it's snowing 🌨️",
  },
  {
    condition: (sky, wind, temp) => sky === "Snow" && wind < 20 && temp <= 50,
    message: "Might actually be a nice snow walk!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Snow" && isBetween(wind, 20, 30) && temp <= 50,
    message: "Probably not walking but you could if you were THAT bored",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Snow" && isBetween(wind, 30, 40) && temp <= 50,
    message: "Go inside, what are you doing?? It's snowing and cold and windy",
  },
  {
    condition: (sky, wind, temp) => sky === "Snow" && wind > 40 && temp <= 50,
    message: "Blizzard?? And you're outside worried about walking?",
  },
];

function getWalkingRules(sky, wind, temp) {
  const rule = rules.find((r) => r.condition(sky, wind, temp));
  return rule ? rule.message : "No message for these conditions 😟";
}

overviewSummary.textContent = getWalkingRules(sky, wind, temp);

// ICON LOGIC

const emotionIcon = document.getElementById("emotion-icon");
const skyIcon = document.getElementById("sky-icon");
const tempInfo = document.getElementById("temp-info");
const skyInfo = document.getElementById("sky-info");
const windInfo = document.getElementById("wind-info");

function changeIconInfo() {
  if (temp > 32) {
    emotionIcon.src = "./images/blue icons/smile-blue.svg";
  } else {
    emotionIcon.src = "./images/blue icons/frown-blue.svg";
  }
  tempInfo.textContent = `${temp}°`;

  if (sky === "Clear") {
    skyIcon.src = "./images/blue icons/sun-blue.svg";
  } else if (sky === "Clouds") {
    skyIcon.src = "./images/blue icons/cloudy-blue.svg";
  } else if (sky === "Rain") {
    skyIcon.src = "./images/blue icons/rain-blue.svg";
  } else if (sky === "Snow") {
    skyIcon.src = "./images/blue icons/snow-blue.svg";
  }
  skyInfo.textContent = `${sky}`;
  windInfo.textContent = `${wind} mph`;
}

changeIconInfo();

//WEEKLY FORECAST LOGIC
function getFutureTemp() {
  const tomorrowTemp = document.getElementById("temp-one");
  const dayTwoTemp = document.getElementById("temp-two");
  const dayThreeTemp = document.getElementById("temp-three");
  const dayFourTemp = document.getElementById("temp-four");

  tomorrowTemp.textContent = `${tomorrow}`;
  dayTwoTemp.textContent = `${dayTwo}`;
  dayThreeTemp.textContent = `${dayThree}`;
  dayFourTemp.textContent = `${dayFour}`;
}

function getFutureIcons() {
  const iconOne = document.getElementById("icon-one");
  const iconTwo = document.getElementById("icon-two");
  const iconThree = document.getElementById("icon-three");
  const iconFour = document.getElementById("icon-four");

  const futureIcons = [iconOne, iconTwo, iconThree, iconFour];
  const skyForecast = [tomorrowIcon, dayTwoIcon, dayThreeIcon, dayFourIcon];

  console.log(skyForecast);

  let weatherIcon;

  futureIcons.forEach((icon) => {
    skyForecast.forEach((sky) => {
      if (sky === "Clear") {
        weatherIcon = "./images/black icons/sun-black.svg";
      } else if (sky === "Clouds") {
        weatherIcon = "./images/black icons/cloudy-black.svg";
      } else if (sky === "Rain") {
        weatherIcon = "./images/black icons/rain-black.svg";
      } else if (sky === "Snow") {
        weatherIcon = "./images/black icons/snow-black.svg";
      }
    });
    icon.src = weatherIcon;
  });
}

const futureDates = [
  document.getElementById("date-one"),
  document.getElementById("date-two"),
  document.getElementById("date-three"),
  document.getElementById("date-four"),
];

// get weather name: clear, clouds, rain, snow
// if that is that, textContent -> that source icon

function getFutureDates(offset) {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

futureDates.forEach((date, index) => {
  date.textContent = getFutureDates(index + 1);
});

// UNUSED CODE BUT LEARNED SOMETHING

//   const tomorrow = forecastList.find((item) => {
//     return item.dt_txt.includes("12:00:00");
//   });
