
//1

function arrshuffle(arr){
    let copyarr = [...arr]
    let shufarr = [];
    let randex;
    for(let i = 0; i >= 0; i++){
        randex = Math.floor(Math.random()*copyarr.length)
        if(copyarr[randex] != undefined){
            shufarr.push(copyarr[randex])
            copyarr.splice(randex, 1)
            copyarr.push(undefined)
        }
        if(shufarr.length == copyarr.length){
            return shufarr
        }
    }
    
}

const q = [1,2,3,4,5,6];

console.log(arrshuffle(q));



//2



let moswavleebi = ["a", "b", "c", "d", "e", "f", "g"]

function gadamnawilebeli(studentebi, numofgroups){
    function randomgetter(aray){
        const ran = Math.floor(Math.random()*aray.length)
        return ran
    }
    let students = [...studentebi]
    
    let ganawilebuli = []
    
    for(let i = 0; i < numofgroups; i++){
        ganawilebuli.push([]);
    }
    while(students.length > 0){

    
        for(let s = 0; s < numofgroups && students.length > 0; s++){   // <=  (= ?)
            
            let randombaganex = randomgetter(students);
            ganawilebuli[s].push(students[randombaganex]);
            students.splice(randombaganex, 1);
        }

    } 

    return ganawilebuli

    
    

}

console.log(gadamnawilebeli(moswavleebi, 3));


//dasasrulebelia meore
