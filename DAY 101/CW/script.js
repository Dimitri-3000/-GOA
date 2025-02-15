const butt = document.getElementById("butt")
const img = document.getElementById("img")

butt.addEventListener("click", function(){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(x => {
            if(x.ok == false){
                throw new Error(`wasulia sheni saqme ${x.status}`);
            }; return x.json()})
        .catch(error => console.error(error))
        .then(x => {img.src = x.message})
})
