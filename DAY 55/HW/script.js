const h1 = document.getElementById("h1")
const p = document.getElementById("p")
const but1 = document.getElementById("btn1")
const but2 = document.getElementById("btn2")
const but3 = document.getElementById("btn3")

const saxeli = prompt("saxeli: ")
const gvari = prompt("gvari: ")

h1.textContent = saxeli + " " + gvari

let para = p.textContent

but1.addEventListener("click", function(){
    para++
    p.textContent = para
})

but2.addEventListener("click", function(){
    para = 0
    p.textContent = para
})

but3.addEventListener("click", function(){
    para--
    p.textContent = para
})


