const img = document.getElementById("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const myArr = ["./169-1696098_tyler-the-creator-head-png-earl-sweatshirt-age.png", "./png-transparent-man-wearing-green-cap-tyler-the-creator-lollapalooza-60th-annual-grammy-awards-rapper-tyler-posey-miscellaneous-celebrities-tshirt-thumbnail.png", "./TylerTheCreator_SamRock-IGOR.jpg"];

let index = 0;

next.addEventListener("click", function(){
    index++;
    if(index > 2){
        index = 0
    }
    img.src = myArr[index]
});


prev.addEventListener("click" , function(){
    index--;
    if(index < 0){
        index = 2
    }
    img.src = myArr[index]
});

//2

const div = document.getElementById("newdiv");
const but = document.getElementById("newbut");

let count = 0;

but.addEventListener("click", function(){
    let newp = document.createElement('p');
    newp.textContent = 'hello zdarova';

    newp.id = "newpid";
    newp.style.color = "blue"
    div.appendChild(newp);

});

newp.style.color = "blue";

// 3

const divi = document.getElementById("remdiv");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

console.dir(divi);




divi.removeChild(divi.children[2]);
divi.firstElementChild.remove();







