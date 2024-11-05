let temp = [[20,22,23,21],[15,16,12,10]]
let aa = ["good morning", "good afternoon", "g00d n00n", "good evening"];

let a;
let b;
b = 0;

for(let i=0; i<temp.length; i++){
    for(let j=0; j<temp[i].length; j++){
        if(b>3){
            b = 0;
        }
        a = aa[b];
        console.log(`${a} Current tempreture is: ${temp[i][j]}`);
        b = b+1;
    }
}   

