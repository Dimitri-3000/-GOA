const advice = document.getElementById("h1")
const butt = document.getElementById("butt")

// with error handling

fetch("https://api.adviceslip.com/advice")
    .then(x => {
        if(x.ok == false){
            throw new Error(`ERRORIII AAAA ${x.status}`)
        }; return x.json()})
    .catch(error => console.error(error))
    .then(x => advice.innerHTML = x.slip.advice)

