

arr1 = [1,2,3,4];
arr2 = [1,2,3,4];

function hmm(a23,a24){
    if(a23.length != a24.length){
        return false
    }
    let mapii = new Map;
    for(let i = 0; i < a23.length; i++){
        mapii.set(a23[i],a24[i])
    }
    for(let [key,value] of mapii){
        if(key != value){
            return false
        }
    }
    return true
}

console.log(hmm(arr1,arr2));