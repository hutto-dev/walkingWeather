// UNIVERSAL LOGIC
const temp = 33;
const sky = "Rain";
const wind = 21;

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
  if (temp >= 70) {
    resultWord.textContent = "YES!";
  } else {
    resultWord.textContent = "No.";
  }
}

setWord();

// OVERVIEW LOGIC

const overviewTitle = document.getElementById("temp-sky-wind");
const overviewSummary = document.getElementById("daily-summary-p");

function changeOverView() {
  overviewTitle.textContent = `${temp}° // ${sky} // ${wind}mph wind`;

  if (sky === "Sunny" && wind < 20) {
    overviewSummary.textContent =
      "Now it seems that today is a GREAT day to walk! Today is the day the Lord has made so let us rejoice and be glad. Let's not be lazy little dorks and just go for a walk.";
  } else if (sky === "Sunny" && wind > 20) {
    overviewSummary.textContent = "Boy oh boy..sunny but don't blow away!";
  } else if (sky === "Cloudy" && wind < 20) {
    overviewSummary.textContent =
      "Sun's not out...gun's not out..but you can still walk!";
  } else if (sky === "Rain") {
    overviewSummary.textContent =
      "Probably skip the walk...you already sat on the beach once in the rain and walked the track in the rain...";
  } else if (sky === "Snow") {
    overviewSummary.textContent = "I mean...you could make a snowman ☃️";
  }
}

changeOverView();

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
