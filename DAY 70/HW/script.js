const myarr = [1,2,3,4,5,6,7];

//1

myarr.forEach((value) => {
    console.log(value)
});


//2

let sum = 0;

myarr.forEach((value) => {
    sum += value;
});
console.log(sum);


//3

const stlist = ['gio','nana','lado','nanuki','ioana'];

stlist.forEach((value) => {
    return value
});

console.log(stlist);


//4

let double = [];

myarr.forEach((value) => {
    value = value * 2;
    double.push(value);
});

console.log(double);


//5


let maparr = myarr.map((value) => {
    value = value * value;
    return value;

});

console.log(maparr);


//6

let newstring = stlist.map((value) => {
    lego = 0;
    for(let i = 0; i < value.length; i ++){
        lego++
    }
    return lego
});

console.log(newstring);


//7

let upperstring = stlist.map((value) => {
    lego = "";
    for(let i = 0; i < value.length; i ++){
        lego = value.toUpperCase();
    }
    return lego
});

console.log(upperstring);


//8

let evenarr = myarr.filter((value) => {
    if(value % 2 == 0){
        return true
    }
});

console.log(evenarr);


//9

let longarr = stlist.filter((value) => {
    if(value.length > 5){
        return true
    }
});

console.log(longarr);


const bigarr = [1,2,3,-4,-3,-888,555];


//10

let posarr = bigarr.filter((value) => {
    if(value > 0){
        return true
    }
});

console.log(posarr);


// ----------clonebi--------

function func(ab){
    let z = ab + ab;
    // let x = ac + ac;
    // let c = ad + ad;

    console.log(z)

}

        //forEach
function foreachclone(arr, funct){
    
    for (let i = 0; i < arr.length; i++){
        funct(arr[i], i, arr)
    }
}



console.log(foreachclone(myarr, func));


        //map
function mapclone(aarr, functt){
    let newarr = [];

    for (let i = 0; i < aarr.length; i++){
        newarr.push(functt(aarr[i]));
    }

    return newarr
}

let newarrr = mapclone(myarr, func);

console.log(newarrr);


        //filter

function f(al){
    if (al % 2 == 0){
        return al
    }
}
function manualfilter(array, myfunc){
    res = [];
    for(let i = 0; i < array.length; i ++){
        if(myfunc(array[i], i, array)){
            res.push(array[i]);
        }
    }
    return res
}

let neww = manualfilter(myarr, func);

console.log(neww);

//










