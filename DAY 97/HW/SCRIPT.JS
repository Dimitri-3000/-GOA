//1
function task1(){
    return new Promise ((resolve, reject) => setTimeout(() => {resolve("task one complete")}, 2000));

}

task1().then((x) => {console.log(x)});

//2
function what(){
    return new Promise((resolve, reject) => reject("what faild"))
}

what().catch(reject => {console.log(reject)});

//3
function number(){
    return new Promise((resolve) => resolve(5));

}

number().then((x)=> {return x*2}).then((y) => console.log(y));

//4
function threesec(){
    return new Promise((resolve) => {setTimeout(()=>resolve("first"), 2000)})
}

threesec().then((x)=>{console.log(x); setTimeout(()=>console.log("second"), 1000)});

//5
function task3(){
    return new Promise((resolve, reject) => {setTimeout(()=>reject("task3 failed"), 2000)})
}

task3().catch((rej) => {console.log(rej)});

//6
function ran(){
    return new Promise((resolve, reject) => setTimeout(()=> resolve("ran complete"), 1000 + Math.random()*5))
}


//7
function j (){
    return new Promise((resolve, reject) => setTimeout(resolve("First"), 1000 + Math.random()*3))
}

j().then((x) => {console.log(x); setTimeout(()=>console.log("second"), 1000 + Math.random()*3)})

//8
function task3(){
    return new Promise((resolve, reject) => {setTimeout(()=>reject("task3 failed"),1000 +  Math.random()*4)})
}

task3().catch((x) => {console.log(x)});

//9
function iff(){
    return new Promise((resolve, reject) => {let deelay = Math.random()*5*1000; setTimeout(()=>{if(deelay>500){resolve("iff has completed")}else{resolve("that was quiq");}}, deelay)})
}

iff().then((message) => {
    console.log(message);
  });


//10
function task(){
    return new Promise((resolve, reject) => {let ddeelay = Math.random()*4*1000; setTimeout(()=>{if(ddeelay<300){reject("task has faild")}else{resolve("task has completed");}}, ddeelay)})
}

task().catch((messag) => {
    console.log(messag);
  });
