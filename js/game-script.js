function Random() {
  var rnd = Math.trunc(Math.random() * 10) + 1;
  document.getElementById("tb").value = rnd;
}
var Loadquotes = function () {
  function printScore() {}
  var quotes = new Array(
    "Down 1  shot",
    "Everyone downs 1 shot",
    "2 x wings",
    "Choose a friend to do a shot",
    "Take a drink",
    "Down your drink",
    "Skip wings",
    "Take a drink",
    "Take a drink",
    "Take a drink",
    "Take a drink",
    "Take a drink"
  );
  var i;

  for (i = 0; i < quotes.length; i++) {
    var newquotes = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteshere").innerText = newquotes;
  }
};
const btnNew = document.querySelector(".btn");
const count = document.getElementById("score-tracker");

function randomScore() {
  var points = Math.trunc(Math.random() * 5) + 1;
  document.getElementById("score-tracker").value = points;
  count.innerText = document.getElementById("score-tracker").value;
}
var clicks = 20;

function onClick() {
  clicks -= 1;
  document.getElementById("clicks").innerHTML = clicks;
  if (clicks === 0) {
    location.reload();
  }
}
