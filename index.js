//1
function countFromOne(num){
  for(let i=1; i<=num; i++){
      console.log(i);
  }
}

//2
function countEveryOdd(num){
  for(let i=1; i<=num; i++){
      if(i%2 > 0){
          console.log(i);
      }
  }
}

//3
function isNegative(num){
    if(num > 0 ){
        return false;
    }else
        return true;
  
}

//4
function betweenFiveAndTwenty(num){
  if(num >= 5 && num <= 20){
      return true;
  }else
    return false;
}

//5 
function isAllLowerCase(str){
  if(str === str.toLowerCase()) {
      return true;
 } else
    return false;
}

//bonus
function countMultiplesOfFive(arr){
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 5 === 0){
            count++
        }
    }
    return count;
}

//countFromOne(10);
//countEveryOdd(11);
//console.log(isNegative(-22));
//console.log(betweenFiveAndTwenty(21));
//console.log(isAllLowerCase('gdfHBJhbkjBKHc'));
console.log(countMultiplesOfFive([1, 5, 6, 10, 11, 15]));