
let myarr = [1,2,3,4,5,6,7];

let newarr = myarr.map(a => a + 1)

console.log(newarr);

let thirdarr = myarr.map(x => x*2);

console.log(thirdarr)

let fourtharr = myarr.map(n => n*3);

console.log(fourtharr)

//2

function manualmap(arr, myfunction){
    neewarrr = [];
    for(let i = 0; i < arr.length; i ++){
        neewarrr.push(myfunction(neewarrr[i], i, arr));
    }
    return neewarrr
}

//3

let aa = ["a","s","a","a","a","s","s","a","a","a"];

let bb = aa.filter(func => {return func = a});

console.log(bb)

//4

function manualfilter(array, myfunc){
    res = [];
    for(let i = 0; i < array.length; i ++){
        if(myfunc(array[i], i, array)){
            res.push(array[i]);
        }
    }
    return res
}










