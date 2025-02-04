const red = document.getElementById("red");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");
const body = document.querySelector("body")
const butt = document.getElementById("butt");

function colchange(col){
   
    localStorage.setItem("col",`${col}`);
    let a = localStorage.getItem("col");
    body.style.backgroundColor = a;
    
}
red.addEventListener("click", function(){
    colchange("red")
});

blue.addEventListener("click", function(){
    colchange("blue")
    });

purple.addEventListener("click", function(){
    colchange("violet")
});
butt.addEventListener("click", function(){
    colchange("white")
    });

window.addEventListener("load", function(){
    colchange(localStorage.getItem("col"))
})