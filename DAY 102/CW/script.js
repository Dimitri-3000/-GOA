
function shevamowmot(){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(`shevamwomot davaleba`)
        }, 1000)
    })
    
}



function shesrulda(){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(`davaleba shesrulda`)
        }, 1000)
    })
    
}


function rand(){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let a = Math.random(); 
            if(a > 0.5){
                resolve(`davaleba warmatebit shesrulda mivige ${Math.floor(a*10)}`)
            }else{
                reject("chaviwerit")
            }
        }, 1000)
    })
    
}



shevamowmot()
    .then(x => {
        console.log(x);
        return shesrulda()
    })
    .then(x => {
        console.log(x);
        return rand()
    })
    .then(x => console.log(x))
    .catch(x => console.log(x));