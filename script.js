// UNIVERSAL LOGIC
const temp = 5;
const sky = "Snow";
const wind = 10;

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
  if (temp < 20 || wind >= 30 || sky === "Rain" || sky === "Snow") {
    resultWord.textContent = "No.";
  } else {
    resultWord.textContent = "YES!";
  }
}

setWord();

// OVERVIEW LOGIC

const overviewTitle = document.getElementById("temp-sky-wind");
const overviewSummary = document.getElementById("daily-summary-p");

function changeOverView() {
  overviewTitle.textContent = `${temp}° // ${sky} // ${wind}mph wind`;
}

changeOverView();

// RULES FOR CONDITIONS & MESSAGES

function isBetween(value, min, max) {
  return (value >= min) & (value <= max);
}

const rules = [
  // SUNNY RULES

  {
    condition: (sky, wind, temp) => sky === "Sunny" && wind < 20 && temp >= 50,
    message:
      "Now it seems that today is a GREAT day to walk! Today is the day the Lord has made so let us rejoice and be glad. Let's not be lazy little dorks and just go for a walk.",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Sunny" && isBetween(wind, 20, 30) && temp >= 50,
    message: "Boy oh boy..sunny but don't blow away!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Sunny" && isBetween(wind, 30, 40) && temp >= 50,
    message: "May not be a good idea but you could always get a tan",
  },
  {
    condition: (sky, wind, temp) => sky === "Sunny" && wind > 40 && temp >= 50,
    message: "LOL..WHY ARE YOU WALKING IN THE TORNADO",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Sunny" && isBetween(wind, 0, 40) && temp < 20,
    message: "Freezing out here...no",
  },
  {
    condition: (sky, wind, temp) => sky === "Sunny" && wind < 20 && temp <= 50,
    message:
      "Now it seems that today is a GOOD day to walk! It's maybe a little chilly but who cares! GO WALK!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Sunny" && isBetween(wind, 20, 30) && temp <= 50,
    message: "Not the warmest out here & it's a little windy..bundle up!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Sunny" && isBetween(wind, 30, 40) && temp <= 50,
    message: "You're probably cold and you need to go home if you're walking",
  },
  {
    condition: (sky, wind, temp) => sky === "Sunny" && wind > 40 && temp <= 50,
    message: "LOL..WHY ARE YOU WALKING IN THE TORNADO & IT'S COLD!!",
  },

  // CLOUDY RULES

  {
    condition: (sky, wind, temp) => sky === "Cloudy" && wind < 20 && temp >= 50,
    message:
      "Sun's not out...gun's not out..but you can still walk! It's a very nice day out if I say so myself",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Cloudy" && isBetween(wind, 20, 30) && temp >= 50,
    message: "Cloudy and windy?? Hmmm. Just go walk",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Cloudy" && isBetween(wind, 30, 40) && temp >= 50,
    message: "Dark & Windy?? Who knows! Walk if you want!",
  },
  {
    condition: (sky, wind, temp) => sky === "Cloudy" && wind > 40 && temp >= 50,
    message: "LOL go inside",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Cloudy" && isBetween(wind, 0, 40) && temp < 20,
    message: "Cloudy & Cold? Go play Stardew Valley",
  },
  {
    condition: (sky, wind, temp) => sky === "Cloudy" && wind < 20 && temp <= 50,
    message: "Cloudy & cool 😎 just like you. Bundle up and walk!",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Cloudy" && isBetween(wind, 20, 30) && temp <= 50,
    message:
      "Now this is little cold...please bring your jacket for once in your life",
  },
  {
    condition: (sky, wind, temp) =>
      sky === "Cloudy" && isBetween(wind, 30, 40) && temp <= 50,
    message: "Probably not...lol",
  },
  {
    condition: (sky, wind, temp) => sky === "Cloudy" && wind > 40 && temp <= 50,
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

  if (sky === "Sunny") {
    skyIcon.src = "./images/blue icons/sun-blue.svg";
  } else if (sky === "Cloudy") {
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

const futureDates = [
  document.getElementById("date-one"),
  document.getElementById("date-two"),
  document.getElementById("date-three"),
  document.getElementById("date-four"),
];

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
