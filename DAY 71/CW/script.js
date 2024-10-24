



// //1
// const nums = [1, 2];

// [nums[0], nums[1]] = [nums[1], nums[0]];

// console.log(nums);



// //2
// const person = {
//     name: 'Alice',
//     age: 25,
//     city: 'New York' };

// const {name, age} = person;

// console.log(name, age);


// //3
// const nestedArray = [1, [2, 3, [4, 5]]];

// const [ ,[ , , [four]]] = nestedArray;

// console.log(four);

// //4
// const fruits = ["apple"];

// const [ap, ban = "banana"] = fruits;

// console.log(ap, ban);

// //5

// const user = {
//   id: 101,
//   username: "john_doe"
// };

// const {id: idd, username: userr} = user;

// console.log(idd, userr);


//----------------


//1

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const y = [...arr1, ...arr2];
console.log(y)

//2 

const arra = [1,2,3,4,5]
const copy = [...arra]
console.log(copy)

//3


const ob1 = {
    1: "a",
    2: "b"
}

const ob2 = {
    3: "c",
    4: "d"
}

const a =  {...ob1, ...ob2};
console.log(a);


//4

const yo = [10,20,30,40,50];

[num1, ...danarcheni] = yo;
console.log(num1);
console.log(danarcheni);


//5

function wow(...aba){
    let ui = []
    for(let i=0; i<aba.length; i++){
        ui.push(aba[i])
    }
    return ui
}

console.log(wow(1,2,3,4,5,6));

//6

const nums = [1,2,3]

function oo (a,b,c){
    console.log(a+b+c);


}

oo(...nums);

//7

const user = {
    name: "gegi",
    lastname: "panguria"

}

const gegiclone = {...user}
console.log(gegiclone);

//8

const car = { brand: 'Toyota', model: 'Corolla', year: 2020, color: 'blue' };

const {brand, model, ...resti} = car;

console.log(resti);


//9

const fruits = ["apple", "pear"]

const ff = ["banana", ...fruits, "grape"];

console.log(ff)


//10

function zd(zzd = "hello", ...rest){
    console.log(zzd,...rest)
}

zd(undefined,"nodari","qondari");

