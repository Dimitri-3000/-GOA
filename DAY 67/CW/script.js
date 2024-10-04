const child = document.getElementById("box");



let left = 0;
let topi = 0
let position = "left";

setInterval(function() {
    if(position == "left"){
        left++
        if(left >= 150){
            position = "top";
        }
    }

    if(position == "top"){
        topi++
        if(topi >= 150){
            position = "right";

        }
    }

    if(position == "right"){
        left--
        if(left<=0){
            position = "up";
        }
    }

    if(position == "up"){
        topi--
        if(topi<=0){
            position = "left"
        }
    }




    
    child.style.top = topi + 'px'
    child.style.left = left + 'px';
}, 10);





  