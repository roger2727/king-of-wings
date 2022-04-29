function Random() {
  var rnd = Math.floor(Math.random() * 11);
  document.getElementById("tb").value = rnd;
}
var Loadquotes = function () {
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
