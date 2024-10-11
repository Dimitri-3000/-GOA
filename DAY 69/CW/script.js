const name = document.getElementById("name");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const email = document.getElementById("email");
const adress = document.getElementById("adress");
const btn = document.getElementById("btn")

myarr = []
btn.addEventListener("click", function(){
    let acountt = {
        name: name.value,
        lastname: lastname.value,
        username: username.value,
        email: email.value,
        adress: adress.value
    }
    myarr.push(acountt);

    name.value = "";
    lastname.value = "";
    username.value = "";
    email.value = "";
    adress.value = "";
    
});

console.log(myarr);




