
//1

const map = new Map([
    ["Japan", "Tokyo"],
    ["Georgia", "Tbilisi"]
])

console.log(map.get("Japan"));
console.log(map.get("Georgia"));

//2

function test(map,string){
    if(map.get(string) != undefined){
        return true
    }
    else{
        return false
    }
}

console.log(test(map, "Japan"))

//3

const grades = new Map([
    ["gio", 5],
    ['elene', 6],
    ['jemal', 10]
])

console.log(grades.get("jemal"));

//4

for (let [key, ] of grades) {
    console.log(key);
}

//5

function deleter(map, pair){
    map.delete(pair);
    return map
}

console.log(deleter(grades,"gio"))

//6
let a = new Map();
a.set("zviada", "1");
a.set("nodo", "2");
a.set("saka", "3");

console.log(a.size);

//7

a.set("zviada", "10");

console.log(a);


//8

function checker(a){
    if (a.size == 0){
        return false
    }else{
        return true
    }

}
console.log(checker(a));

//9

let newobj ={
    "soko": 3,
    "mandarini": 4,
    "chai": 0.2,
    "karaqiani puri": 5
}
let mapi = new Map(Object.entries(newobj));

console.log(mapi)

//10

mapi.clear();

console.log(checker(mapi))

