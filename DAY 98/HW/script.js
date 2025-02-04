
const namee = prompt("whats yo name");
const button = document.getElementById("butt");


button.addEventListener("click", function(){
    localStorage.setItem("name", namee)
    window.open('http://127.0.0.1:5500/HW/index%202.html')
});