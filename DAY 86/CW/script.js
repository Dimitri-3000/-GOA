
const wre = document.getElementById('wre');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const yh1 = document.getElementById('yh1');
const mh1 = document.getElementById('mh1');
const dh1 = document.getElementById('dh1');
const time = new Date;

let yearnow = time.getFullYear();
let daynow = time.getDate();
let monthnow = time.getMonth()+1;

console.log(yearnow, daynow, monthnow)

let count = 0;
wre.addEventListener("click", function(){
    count++
    
    if(count % 2 == 1){
        wre.style.backgroundColor = 'red';
        
    }else{
        wre.style.backgroundColor = 'rgb(158, 45, 244)';
        day.value = "";
        month.value = "";
        year.value = "";
        dh1.textContent = "--"
        mh1.textContent = "--"
        yh1.textContent = "--";
    }
    

    if(Number(day.value) < 32 && day.value != ""){
        dh1.textContent = daynow - day.value;
        day.style.borderColor = "gray"
    }else{
        day.style.borderColor = "red"
    }

    if(Number(month.value) < 13 && month.value != ""){
        mh1.textContent = monthnow - month.value;
        month.style.borderColor = "gray"
    }else{
        month.style.borderColor = "red"
    }

    if(Number(year.value) <= yearnow && year.value != ""){
        yh1.textContent = yearnow - year.value;
        year.style.borderColor = "gray"
    }else{
        year.style.borderColor = "red"
    }

    
});


