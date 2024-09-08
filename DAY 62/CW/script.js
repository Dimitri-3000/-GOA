
let massiv = [];

for(let i = 0; i <=100; i++){
    massiv.push(i);
}

console.log(massiv)


let yo = 0;
for(let i = 0; i < yo.length; i++){
    if(i % 2 === 0){
        yo += i;
    }
}

console.log(yo)

//

let arr = [1,2,3,4,5,6,7,8];

function manualreverse(li){
    li = li.reverse()
    return li
}

console.log(manualreverse(arr));

//

function manualindexof(num, arr){
    for(let i = 0; i <= arr.length-1;i++){
        if (arr[i] === num){
            return i
        }
    }

    return -1

}

a = [1,2,3,4,5,6]

console.log(manualindexof(3,a))


arai = [3,4,5,6,6,8,9]

console.log(arr.indexOf(3))

console.log(arr.lastIndexOf(8))