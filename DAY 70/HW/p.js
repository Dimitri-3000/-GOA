
const inputi = document.getElementById("input");
const btni = document.getElementById("add text");
const uli = document.getElementById("ul");




let count = 0;

btni.addEventListener("click", function(){

    count++
    
    
    let lii = document.createElement("li");
    let btnnn = document.createElement("btn");
    let divi = document.createElement("div");
    btnnn.id = "axalibtn";
    btnnn.className = count;
    lii.id = "axalili";
    divi.id = "divi";
    divi.appendChild(lii);
    divi.appendChild(btnnn);

    uli.appendChild(divi);
    lii.textContent = inputi.value;
    
    inputi.value = "";
    
});

