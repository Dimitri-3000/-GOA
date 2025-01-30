
const age = document.getElementById("age");
const sex = document.getElementById("id");
const email = document.getElementById("email");

const button = document.getElementById("button")

const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3");


const input = document.querySelector("input");


button.addEventListener("click", function(){
    p1.innerHTML = `AGE: ${age.value}`; 
    p2.innerHTML = `SEX: ${sex.value}`; 
    p3.innerHTML = `EMAIL: ${email.value}`; 
})




