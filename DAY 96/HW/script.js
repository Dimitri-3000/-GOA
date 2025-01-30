const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
const h1 = document.getElementById("h1");

plus.addEventListener("click", function(){
    let h = Number(h1.innerHTML);
    h++;
    localStorage.setItem("num", JSON.stringify(h))
    h1.textContent = h;
    
})

window.addEventListener("load", function() {
    const storedNum = localStorage.getItem("num");
    if (storedNum) {
        h1.textContent = JSON.parse(storedNum); 
    }
});