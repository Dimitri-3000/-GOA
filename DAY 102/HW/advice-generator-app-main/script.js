const advice = document.getElementById("h1")
const butt = document.getElementById("butt")




async function myfetch(url){
    let fetched_var = await fetch(url);
    let j = await fetched_var.json();
    advice.innerHTML = j.slip.advice
}

myfetch("https://api.adviceslip.com/advice")


