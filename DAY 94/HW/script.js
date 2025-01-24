

//1

function salami(name){
    console.log(`hello ${name}`)
}


function dagvianeba(name, callback){
    setTimeout(()=>{callback(name)}, 1000)
}

dagvianeba("givi", salami);


//3

function yo(arr, callback){
    setTimeout(()=>{
        for(let i of arr){
            callback(i*i)
        }
    }, 2000)
}

yo([1,2,3,4], (m) => {console.log(m)})

//4
const feri = document.getElementById("col")

function call(varr){
    feri.style.color = varr
}

function delay(color, callback){
    let aaa = "";
    setTimeout(()=>{
        aaa = color;
        callback(aaa)

    }, 2000);

}

delay("red",call);


//5

function c (){
    let a = prompt("whats your name?");
    return a
}

function a (callback){
    let aa = callback()
    setTimeout(()=>{console.log(`hello ${aa}`)}, 3000);
}

a(c);
