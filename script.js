var getQuote = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://eda-te-reo.herokuapp.com/api/proverbs", false);
  xhr.send();


  var responseDump = xhr.response;
  var cleanResponse = JSON.parse(responseDump)
  var teReo = cleanResponse.source;
  var translation = cleanResponse.translation;
  document.getElementById('teReoID').innerHTML = teReo.toString();
  document.getElementById('translationID').innerHTML = translation.toString();
}
