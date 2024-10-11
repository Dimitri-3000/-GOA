const divebi = document.getElementsByTagName('div')

for(let i = 0; i < divebi.length; i++ ){
    divebi[i].addEventListener("click", ()=> {
        console.log(divebi[i].id)
    })
}

//2


const next = document.getElementById("next");
const prev = document.getElementById("prev");
const img = document.getElementById("img")


const arr = ["./13-139038_frank-ocean-lgb-frank-ocean-aphex-twin.png",
            "./bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
            "./image-2-819x1024.png",
            "./png-transparent-frank-ocean-endless-odd-future-channel-orange-travis-scott-frank-ocean-endless-odd-future-thumbnail.png",
            "./tumblr_mfz4gjwXR41rpljlco1_500.png"]




index = 0;

next.addEventListener("click", function(){
    
    index++
    img.src = arr[index]
    if (index >= 4){
        index = 0;
    }

})

prev.addEventListener("click", function(){
    index--
    img.src = arr[index]
    if(index < 0){
        index = 4;
    }

})

