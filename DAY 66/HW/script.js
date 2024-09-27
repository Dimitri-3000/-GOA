// 1
const newpe = document.createElement("p");

newpe.textContent = "axali";
newpe.style.order = "-1"
document.body.appendChild(newpe);

// 2
const pee = document.getElementById('div1');
const newdiv = pee.cloneNode();

document.body.appendChild(newdiv);

// 3
const ul = document.getElementById("ul")
ul.removeChild(ul.children[1]);


//4
const newh1 = document.getElementById("h1");
const newwwh1 = document.createElement("h2");
newwwh1.textContent = "whats popping"
// newh1.replaceChild(newwwh1, newh1.childNodes[0]);

//5
const removei = document.getElementById('removep')
removei.remove();

// 7
const spaniani = document.getElementById("spanebiani");

function yo(){
    const spanii = document.createElement("span");
    spaniani.appendChild(spanii);
    spanii.textContent = "span  "
}

yo();
yo();
yo();

// 8
const btn = document.getElementById("gilaki");
let tvla = 1;
btn.addEventListener("click", function(){
    tvla++
    if (tvla % 2 == 0){
        pee.style.backgroundColor = "red"
    }
    else{
        pee.style.backgroundColor = "aquamarine"
    }
    
});

const newb = btn.cloneNode();

// document.appendChild(newb);

//9
const imgi = document.getElementById("imgi");
const alax = document.getElementById("pele");
alax.appendChild(imgi);


















