// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

function fetchJoke() {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  const h2 = document.getElementById('jokeContainer');

  fetch(API_URL, myObject)
    .then(response  => response.json())
    .then(response => h2.innerText = response.joke);

};

window.onload = () => fetchJoke();