const ertisaxeli = document.getElementById("ertisaxeli");
const ertimatematika = document.getElementById("ertimatematika");
const ertiqartuli = document.getElementById("ertiqartuli");

const orisaxeli = document.getElementById("orisaxeli");
const orimatematika = document.getElementById("orimatematika");
const oriqartuli = document.getElementById("oriqartuli");

const samisaxeli = document.getElementById("samisaxeli");
const samimatematika = document.getElementById("samimatematika");
const samiqartuli = document.getElementById("samiqartuli");

const button = document.getElementById("button");

const gio = document.getElementById("gio");
const vaso = document.getElementById("vaso");
const vato = document.getElementById("vato");

const giomat = document.getElementById("giomat");
const gioqar = document.getElementById("gioqar");
const vatomat = document.getElementById("vatomat");
const vatoqar = document.getElementById("vatoqar");
const vasomat = document.getElementById("vasomat");
const vasoqar = document.getElementById("vasoqar");

const giosash = document.getElementById("giosash");
const vasosash = document.getElementById("vasosash");
const vatosash = document.getElementById("vatosash");

const gioreset = document.getElementById("gioreset");
const vasoreset = document.getElementById("vasoreset");
const vatoreset = document.getElementById("vatoreset");


let fruits = new Map ([
    ["salo" , 9],
    ["givi", 0]
]);


button.addEventListener("click", function(){
    gio.textContent = ertisaxeli.value
    vaso.textContent = orisaxeli.value
    vato.textContent = samisaxeli.value

    giomat.textContent = ertimatematika.value
    vasomat.textContent = orimatematika.value
    vatomat.textContent = samimatematika.value

    gioqar.textContent = ertiqartuli.value
    vasoqar.textContent = oriqartuli.value
    vatoqar.textContent = samiqartuli.value 

    giosash.textContent = (Number(ertimatematika.value) + Number(ertiqartuli.value))/2
    vasosash.textContent = (Number(orimatematika.value) + Number(oriqartuli.value))/2
    vatosash.textContent = (Number(samimatematika.value) + Number(samiqartuli.value))/2
});
const newmatgio = document.getElementById("newmatgio");
const newmatvaso = document.getElementById("newmatvaso");
const newmatvato = document.getElementById("newmatvato");
const newqargio = document.getElementById("newqargio");
const newqarvaso = document.getElementById("newqarvaso");
const newqarvato = document.getElementById("newqarvato");

gioreset.addEventListener("click", function(){
    if(newmatgio.value && newqargio.value != ""){
        giomat.textContent = newmatgio.value;
        gioqar.textContent = newqargio.value;
        giosash.textContent = (Number(newmatgio.value) + Number(newqargio.value))/2
        }
    
    
})

vasoreset.addEventListener("click", function(){
    if(newmatvaso.value && newqarvaso.value != ""){
        vasomat.textContent = newmatvaso.value;
        vasoqar.textContent = newqarvaso.value;
        vasosash.textContent = (Number(newmatvaso.value) + Number(newqarvaso.value))/2
        }
    
    
});

vatoreset.addEventListener("click", function(){
    if(newmatvato.value && newqarvato.value != ""){
        vatomat.textContent = newmatvato.value;
        vatoqar.textContent = newqarvato.value;
        vatosash.textContent = (Number(newmatvato.value) + Number(newqarvato.value))/2
        }
    
    
});

const rating = document.getElementById("rating");

const r1 = document.getElementById("r1")
const r2 = document.getElementById("r2")
const r3 = document.getElementById("r3")

rating.addEventListener("click", function(){
    let aa = new Map;
    aa.set( giosash.textContent,ertisaxeli.value);
    aa.set( vasosash.textContent,orisaxeli.value);
    aa.set( vatosash.textContent,samisaxeli.value);

    console.log(aa)
    let big = 0;

    for([key,value] of aa){
        if (key > big){
            big = key;
        }
    };
    let biggest = aa.get(big)
    r1.textContent = biggest
    aa.delete(big)

    console.log(aa)

    let bigg = 0;

    for([key,value] of aa){
        if (key > bigg){
            bigg = key;
        }
    };
    let medium = aa.get(bigg)
    r2.textContent = medium
    aa.delete(bigg)


    console.log(aa)

    let keyy = aa.keys().next().value;

    r3.textContent = aa.get(keyy)


    

    

    

    

});








