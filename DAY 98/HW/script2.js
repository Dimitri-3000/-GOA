
const namee = localStorage.getItem("name");
const h1 = document.getElementById("h1");

const button = document.getElementById("butt");
const color = document.getElementById("color");
const body = document.querySelector("body")


h1.innerHTML = namee

button.addEventListener("click", function(){
    localStorage.setItem("color", color.value);
    var a = localStorage.getItem("color")
    body.style.backgroundColor = localStorage.getItem("color")
});

window.addEventListener("load", function(){
    body.style.backgroundColor = localStorage.getItem("color")
})

const p = document.getElementById("p")
const num = document.getElementById("num")
const numbutt = document.getElementById("numbutt")
const qula = document.getElementById("qula")





let ran = Math.ceil(Math.random()*2)

let Q = 0

let index = 0
qula.innerHTML = Q

let arr = ["Guess: [1-2]", "Guess: [1-5]", "Guess: [1-10]", "Guess: [1-50]", "Guess: [1-100]"]
let ar = [2,5,10,50,100]
p.innerHTML = arr[index]

numbutt.addEventListener("click", function(){
    
    if(num.value == ran){
        Q++
        qula.innerHTML = Q
        index++
        p.innerHTML = arr[index]
        ran = Math.ceil(Math.random()*ar[index])
        num.value = ""
    }else{
        num.value = ""
    }
    console.log(ran)

    if(index > 4){
        qula.innerHTML = `${namee} YOU WINNN`
        qula.style.border = "none";
        p.innerHTML = "well done";
        
    }

});
