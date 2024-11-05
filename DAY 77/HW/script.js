

function mult(){
    let res = [];
    for(let i = 1; i < 11; i++){
        let yo = [];
        for(let u = 0; u < 11; u++){
            yo.push(i*u);
        }
        res.push(yo);
    }
    return res
}

console.log(mult());



function bigger(num){
    let res = []
    for(let i = 1; i < num; i++){
        for(let d = i + 1; d <= num; d++){
            res.push(`${i},${d}`)

        }
    }

    console.log(res)
}

bigger(6);



function rowsCols(rows, cols){
    for(let row = 0; row <= rows; row++){
        for(let col = 0; col <= cols; col++){
            console.log(`rows: ${row}, columns ${col}`)
        }
    }
}

rowsCols(4, 7);