const namee = document.getElementById("name")
const lastname = document.getElementById("lastname")
const age = document.getElementById("age");
const height = document.getElementById("height");
const bio = document.getElementById("bio");
const email = document.getElementById("email");
const id = document.getElementById("id");
const button = document.getElementById("button")

const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");

const input = document.querySelector("input")

function autoemail(namee,lastname){
    let AE = `${namee.value}${lastname.value}.gmail.com`
    return AE
}

button.addEventListener("click", function(){
    if(namee.value || lastname.value || age.value || height.value || bio.value || id.value || email.value === ""){
        alert("fill all");
    }
    if(namee.value&lastname.value &age.value&height.value &bio.value &id.value &email.value!==""){
        p1.textContent = `name: ${namee.value}`
        p2.textContent = `lastname: ${lastname.value}`
        p3.textContent = `age: ${age.value}`
        p6.textContent = `id: ${id.value}`
        p5.textContent = `bio: ${bio.value}`
        p4.textContent = `height: ${height.value}`
        p7.textContent = `email: ${autoemail(namee, lastname)}`
        
    }
        

    
    
    

})

