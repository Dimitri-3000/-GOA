
//1


// for(let i = 20; i < 50; i++){
//    console.log(i)
// }



//2

// let a = 30
// while(a <= 60){
    
//     console.log(a)
//     a++
// }


//3

const blue = document.getElementById("blue")
const red = document.getElementById("red")
const violet = document.getElementById("violet")
const green = document.getElementById("green")
let divi = document.getElementById("divi")




function Color(color){
    divi.style.backgroundColor = color;
}


//4

let text = document.getElementById("text")
let erti = document.getElementById("h2")

text.addEventListener("input", counter);

function counter(){
    const limit = 200;
    let tvla = text.value.length;

    if(tvla > limit){
        erti.textContent = "vso"

    }
    else{
        erti.textContent = tvla
    }
}

//5

const p = document.getElementById("axali")
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




//6

let Password = prompt("password: ")
const swori = "avataraang"

tvla = 2

while(tvla != -1){
    if (Password == swori){
        break
 
    }
    if(Password != swori){
        tvla = tvla - 1;
        Password = prompt("Password: ");
    }

    if (tvla == 0){
        alert("blocked")
        tvla = 3;
    }

}

//7

const border = prompt("your border:")

let S = Number(border)


function even(io){
    let listi = []
    for (let i = 0; i <= io; i++){
        listi.push(i);
    }
    return listi
}


console.log(even(S));

function calculateSum(li){
    let jami = 0
    for (let u = 0; u <= (length.li) - 1; u++ ){
        jami = jami + li[u];
    }
    return jami

}

let aa = even(S)

console.log(calculateSum(aa));



























