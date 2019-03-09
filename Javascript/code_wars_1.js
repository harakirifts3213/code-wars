function firstReverseTry(arr) {
  //coding and coding..
  //if the array is empty
    //return the array
  if(arr.length === 0){
    return arr;
  }
  
  const first = arr[0];
  
  const lastIndex = arr.length - 1;
  const last = arr[lastIndex];
  
  arr[0] = last;
  arr[lastIndex] = first;
  
  return arr;
  
}

// clarify
// create sample solutions
//[0, 2, 3] > [3, 2, 0]
//Pseudo code
