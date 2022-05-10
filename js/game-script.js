function Random() {
  var rnd = Math.trunc(Math.random() * 10) + 1;
  document.getElementById("tb").value = rnd;
}
var Loadquotes = function () {
  function printScore() {}
  var quotes = new Array(
    "Down 1  shot",
    "Everyone downs 1 shot",
    "Eat 2 x wings",
    "Choose a friend to do a shot",
    "Have a drink",
    "Finish your drink",
    "Skip wings",
    "Everyone take a drink",
    "Have a drink",
    "Have a drink",
    "Have a drink",
    "Have a drink",
    "Choose a friend to take your wings"
  );
  var i;

  for (i = 0; i < quotes.length; i++) {
    var newquotes = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteshere").innerText = newquotes;
  }
};
const btnNew = document.querySelector(".btn");

var clicks = 20;

function onClick() {
  clicks -= 1;
  document.getElementById("clicks").innerHTML = clicks;
  if (clicks === 0) {
    window.location.href = "endGame.html";
  }
}
