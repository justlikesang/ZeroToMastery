// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5]'
// It should return undefined;


function findRecurring(arr) {
  // create variable count and assign empty obj
  // iterate through the arr
    // if the current element doesn't exist in the count var
      // assign 1 to it
    // else
      // increment by 1
      // if the count is equal to 2
        // return count[arr[i]]
  // return undefined

  let count = {};
  for(let i = 0; i < arr.length; i++) {
    if(!count[arr[i]]) {
      count[arr[i]] = 1;
    } else {
      ++count[arr[i]];
      if(count[arr[i]] === 2) {
        return count[arr[i]];
      }
    }
  }
  return undefined;
}

console.log(findRecurring([2,5,1,2,3,5,1,2,4]));
console.log(findRecurring([2,1,1,2,3,5,1,2,4]));