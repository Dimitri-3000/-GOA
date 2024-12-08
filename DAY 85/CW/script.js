let arr = [2,0,0,0,0,4];

function zumer (n,arr){
    let a = arr[n-1];
    arr[n-1] = arr[0];
    arr[0] = a;
    return arr
}

console.log(zumer(6,arr));


//1
function feast(beast, dish) {
    let a;
    for(let i in beast){
      if(i == beast.length-1){
        a = i
      }
    }
    let l;
    for(let o in dish){
      if(o == dish.length-1){
        l = o
      }
    }
    
    let start = beast[0];
    let end = beast[a];
    
    if(dish[0] == start && dish[l] == end){
      return true
    }
    else{
      return false
    }
  
  }

  //2

  function stringToArray(string){
    let arr = string.split(" ")
    return arr
  }


  console.log(stringToArray("ha la la al"));

  //3
  const areaOrPerimeter = function(l , w) {
    if(l == w){
      return l*w
    }
    else{
      return 2*(l+w)
    }
    
  };


