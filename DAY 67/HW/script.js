

const child = document.getElementById("divchild");


let topii = 0;
let left = 0;
let mimart = 'left'
let itt = 0;


setInterval(function(){
    
    if (mimart == 'left'){
        
        
        left = left + 1;
        if (left >= 150){
            mimart = 'down';
        }
        
    } else if (mimart == 'down'){
        
        topii += 1;
        if (topii >= 150){
            mimart = 'right'
        }


    } else if (mimart == 'right'){
        left = left - 1;
        if (left <= 0){
            mimart = 'up';
        }
    } else if (mimart == 'up'){
        topii = topii - 1;
        if (topii <= 0){
            mimart = 'left'
        }
    }


      

    
    child.style.top = topii + 'px'
    child.style.left = left + 'px'

    if (itt == 3){
        mimart = 'aa';
    }
    

    
}, 5);










