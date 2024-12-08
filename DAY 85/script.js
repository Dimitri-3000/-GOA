let ar = [1,2,3,4]
function wo (arr){
    let big1 = arr[0];
    let big2 = arr[0];

    for(let i in arr){
        if(big1 < arr[i]){
            big1 = arr[i]
        }
    }
    arr.pop(big1);

    for(let i in arr){
        if(big2 < arr[i]){
            big2 = arr[i]
        }
    }

    return big1*big2
}

console.log(wo(ar));