
//1

function findNextSquare(sq) {
  
    let a = Math.sqrt(sq)
    
    if(a % 1 != 0){
      return -1
    }else{
      return (a+1)**2
    }
    
}

//2

function solution(str, ending){
  
    return str.slice(-ending.length) === ending;
  
}