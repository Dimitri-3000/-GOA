const advice = document.getElementById("h1")
const butt = document.getElementById("butt")

fetch("https://api.adviceslip.com/advice")
    .then(x => x.json())
    .then(x => advice.innerHTML = x.slip.advice)

