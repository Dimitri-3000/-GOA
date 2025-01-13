//1

let yo = [new Set([1, 2]), new Set([2, 3]), new Set([3, 4])];


function small(yo){
let arr = [];
for(i of yo){
    for(o of i){
       arr.push(o)  
    }
}
let n = new Map
for(i of arr){
    n.set(i,"k")
}
let ye = new Set();
for(i of n.keys()){
    ye.add(i)
}
return ye
}


console.log(small(yo));

//2

let simz = [new Set([1,2,3]), new Set([2,88,43])];

function lil(nakrebi){
    let ye = [];
    for(i of nakrebi){
        for(u of i){
            ye.push(u)
        }
    }
    let nw = new Map;
    for(i of ye){
        nw.set(i, nw.get(i)+" k")
    }
    let wai = new Map;
    let a = 0;
    for([key, value] of nw){
        a++
        if(nw.get(key) == "undefined k"){
            wai.set(a, nw.get(key))
        }
    }
    let yes = new Set;
    for(i of wai.keys()){
        yes.add(i)
    }
    return yes
}

console.log(lil(simz));

//3

function op (qvenakrebi, nakrebi){
    
    for(i of qvenakrebi){
        let a = false
        for(j of nakrebi){
            if(i==j){
                a = true
                {break}
            }
        }
        if(!a){
            return false
        }
    }
    return true
}

let nakrebi = new Set([1,2,3]);
let qvenakrebi = new Set([1,2]);

console.log(op(qvenakrebi, nakrebi))

//4

let hello = "wrupp";

function counter(word){
    let map = new Map;
    for(let i = 0; i < word.length; i++){
        map.set(word[i], (map.get(word[i]) || 0)+1)
    }
    return map
}

console.log(counter(hello));


//5

let mm = new Map([["a",1],["b",3],["c",3]]);

function rev (ma){
    let new_ma = new Map;
    for([key, value] of ma){
        new_ma.set(value,key)
    }
    return new_ma
}

console.log(rev(mm));

///6

let wa = new Map([
    ["a",1],
    ["b",2],
    ["c",2]
]);

function bigg (r){
    let values = Array.from(r.values());

    for(i of values){
        var a = values[0];
        if(i > a){
            a = i;
        }
    }
    let b = a

    let arr = [];
    for(let[key,vaalue] of r){
        if(vaalue === b){
            arr.push(key)
        }
    }

    return arr
}

console.log(bigg(wa));





