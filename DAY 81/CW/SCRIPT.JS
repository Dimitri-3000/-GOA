//1

function smaller(arr){
    let newarr = [];
    for (let i = 0; i < arr.length; i++){
          let count = 0;
          for (let u = 0; u<arr.length; u++){
              if(u>i && arr[i]>arr[u]){
                  count++;
                }
            }
        newarr.push(count);
    }
    return newarr
}

//2

String.prototype.toAlternatingCase = function (string) {
    let res =""
    
    for (let i = 0; i < this.length; i++){
      if (this[i] == this[i].toLowerCase()){
        res = res + this[i].toUpperCase()
      }
      else {
        res = res + this[i].toLowerCase()
      }
    }
    return res
    
  }



      