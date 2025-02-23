
//1

function toCamelCase(str){
  
    let camel = `${str[0]}`
    
    let pos;
    
    for(let i = 1; i<str.length; i++){
        if(str[i] == "-"){
          pos = true;
          continue;
        }
        if(pos){
          camel = camel + str[i].toUpperCase();
          pos = false
        }else{
          camel = camel + str[i];
        }
      
    }
    return camel
}

console.log(toCamelCase("hey-how-are-you"))

//2
let a = 0;

async function wo() { 
    a = a + 1;

    try{
        let vaime = a;
        let aaa = await fetch(`https://jsonplaceholder.typicode.com/todos/${vaime}`);
        let b = await aaa.json();
        let p = document.createElement('p');
        p.id = "haha";
        document.body.appendChild(p)
        p.textContent += b.title

    }catch(error){console.error('damn it')}
    
    
}
let butt = document.getElementById("butt")
butt.addEventListener("click", wo);

