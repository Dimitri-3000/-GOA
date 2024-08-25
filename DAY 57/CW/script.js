//#1

const yo = {
    Name: "gio",
    Lastname: "kaktusia"
}


yo.Name = "grigoli";
yo.Email = "giomagaria@gmail.com";
yo.Password = "123" ;
 
console.log(yo)


//#2

const pe = document.getElementById("pid")
pe.textContent = "h a ha ha ha "
pe.style.color = "violet"

//#3
const p = document.getElementById("p")
const but1 = document.getElementById("btn1")
const but2 = document.getElementById("btn2")
const but3 = document.getElementById("btn3")

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



