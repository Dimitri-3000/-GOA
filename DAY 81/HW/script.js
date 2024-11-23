

//1

let arr = [1,3,2,5,8,4,6,7,9];

function arrswap(arr, a, b){
    x = arr[a];
    y = arr[b];
    arr[a] = y;
    arr[b] = x;
    return arr
}

function sort(array){
    for(let i = 0; i < array.length; i++){
         
        for(let a = 0; a < array.length; a++){
            if(array[a] > array[a+1]){
                arrswap(array, a, a+1);
            }

        }
    }
    return array
}

console.log(sort(arr));


//2

let a = prompt("string");


function omg(string){
    let arr = []
    for(let i = 0; i < string.length; i++){
        let count = 0;
        for(let a = 0; a < i; a++){
            if(string[a] == string[i]){
                count++
            }
        }
        arr.push(`${count}`)
    }
    return arr
}
console.log(a)
console.log(omg(a))

