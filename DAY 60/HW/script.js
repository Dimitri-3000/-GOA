

// 1

function incrementString (strng){
    let tvla = 0;
    for (let y = 0; y < 10; y ++){
      if(strng.search(y) == -1){
        tvla++;
      }
    }
    if (tvla ==10){
      return strng + 1
    }
    let wa = ""
    for (let i = 0; i < strng.length; i ++){
      for (let num = 0; num < 10; num++){
        if( strng[i] == num){
          wa = wa + strng[i]
        }
      }
    }
    let ss = strng.slice(0, strng.length - wa.length);
    let a = Number(wa) + 1;
    let tvlai = "";
    let eh = 'p'
    for(let oo = 0; oo < wa.length; oo++){
        if(wa[oo]=="0"){
            eh = 'l'
            tvlai = tvlai + "0"
        }
    }
    let bolotvlai =""
    if(eh == "l"){
        bolotvlai = tvlai.slice(-1) + "0"
    }
    if(eh =="p"){
        bolotvlai = "";
    }

    let ricxvebi = bolotvlai.toString()+a.toString();

    if(ricxvebi.length > wa.length){
        ricxvebi.slice(0,1);

    }
   
    return `${ss}${ricxvebi}`
  }

console.log(incrementString("aaa133"));


//2



function mat(a1, a2){
  let sqarr = [];
  let count = 0;
  for(let i = 0; i<a1.length; i++){
    sqarr.push((a1[i] - a2[i])**2);
    count++
  }
  let sum = 0;
  for(let p = 0; p < sqarr.length; p++){
    sum = sum+ sqarr[p]; 
  }
  return sum / count
    
}

console.log(mat([1, 2, 3], [4, 5, 6]))