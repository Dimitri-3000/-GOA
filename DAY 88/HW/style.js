

let ara = [1,2,3,4,3,2,1]
function oddfider(arr){
    let m = new Map();

    for(i of ara){
        m.set(i, (m.get(i) || 0)+1)
    }

    for (let [i ,o] of m){
        if (o % 2 == 1){
            return i
        }
    }
}

console.log(oddfider(ara))