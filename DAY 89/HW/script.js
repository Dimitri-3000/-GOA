//1

let arr = [["gio",1],["levani",2],["saba",5]];

function waa(ar){
    let mapii = new Map;

    for(let i of ar){
        for(let u = 0; u < i.length; u++){
            mapii.set(i[0],i[1])
        }
    }
    return mapii
}

console.log(waa(arr));


//2

let mass = [1,2,3,2,1,2,3,2,1,2,3,2,1,2,3,1];

function opala(arr){
    let mapi = new Map;

    for(i of arr){
        mapi.set(i,"hehe");

    }
    let a = mapi.keys();
    let aa = [];
    for(let i of a){
        aa.push(i)
    }
    return aa;
}

console.log(opala(mass));

//3

let students = new Map([
    ["gio",3],
    ["zvio",2],
    ["kato",0]
]);

function plusfiver(mapp){
    for(let [key,value] of mapp){
        mapp.set(key,value + 5);
    }
    return mapp
}
console.log(plusfiver(students))