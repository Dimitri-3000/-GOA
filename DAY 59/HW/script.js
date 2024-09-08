const nname = document.getElementById("name")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const p = document.getElementById("mes")
const btn = document.getElementById("button")

btn.addEventListener("click", function(){
    if(nname.textcontent || lastname.textcontent || email.textcontent === ""){
        p.textContent = "fill all the spaces";

    }
    else{
        p.textContent = "all good";
    }

    console.log("name: " + (nname.value))
    console.log("lastname: " + (lastname.value))
    console.log("email: " + (email.value))
});









