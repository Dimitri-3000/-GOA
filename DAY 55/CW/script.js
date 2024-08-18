const button1 = document.getElementById("btn1")
const button2 = document.getElementById("btn2")
const p = document.getElementById("par")


const n1 = prompt("enter number: ")
const n2 = prompt("enter second number: ")




let para = sum(n1,n2)



button1.addEventListener("click", function(){
    para = para + 1
    p.textContent = para

})

button2.addEventListener("click", function(){
    para = para - 1
    p.textContent = para
})


function sum(a,b){
    return Number(a) + Number(b)
}

function sub(a,b){
    return Number(a) - Number(b)
}

function mul(a,b){
    return Number(a) * Number(b)
}

function div(a,b){
    return Number(a) / Number(b)
}

