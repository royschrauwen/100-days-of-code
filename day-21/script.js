// https://api.adviceslip.com/
/*
Random advice
Note: Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.

HTTP Method	GET
URL	https://api.adviceslip.com/advice
Description	Returns a random advice slip as a slip object.
Parameters	
callback
string To define your own callback function name and return the JSON in a function wrapper (as JSONP), add the parameter callback with your desired name as the value.
*/

const adviceNumber = document.querySelector("#advice-number");
const adviceText = document.querySelector("#advice-text");
const adviceButton = document.querySelector("#advice-button");

const url = "https://api.adviceslip.com/advice";

adviceButton.addEventListener("click", getNewAdvice);

function getNewAdvice() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      displayAdvice(data);
    })
    .catch(() => {
      console.error("Problem with getting data from API");
    });

  function displayAdvice(data) {
    adviceNumber.textContent = data.slip.id;
    adviceText.textContent = data.slip.advice;
  }
}
