// Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.
// Example 1:

// Input: arr = [1,2,3]
// Output: 2
// Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
// Example 2:

// Input: arr = [1,1,3,3,5,5,7,7]
// Output: 0
// Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
// Example 3:

// Input: arr = [1,3,2,3,5,0]
// Output: 3
// Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
// Example 4:

// Input: arr = [1,1,2,2]
// Output: 2
// Explanation: Two 1s are counted cause 2 is in arr.
// Example 5:

// Input: arr = [1,1,2]
// Output: 2
// Explanation: Both 1s are counted because 2 is in the array.

// Constraints:

// 1 <= arr.length <= 1000
// 0 <= arr[i] <= 1000

function countConsecutives(arr) {
  // create variable counter and assign object
  // create variable count and assign 0
  // iterate through the arr
  // create property for each element and assign 1
  // else
  // increase the property by 1

  // iterate through the arr again
  // if the current element + 1 exists in the counter object
  // increment count by 1
  // decrement counter property by 1
  // if the property count is 0
  // delete the property

  let counter = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let potentialNum = arr[i] + 1;
    let pastNum = arr[i] - 1;
    if (potentialNum in counter) {
      count++;
    }
    if (pastNum in counter && counter[arr[i]] === undefined) {
      count += counter[pastNum];
      counter[pastNum] = 0;
    }
    if (!counter[arr[i]]) {
      counter[arr[i]] = 1;
    } else {
      counter[arr[i]]++;
    }
  }


  // for (let i = 0; i < arr.length; i++) {
  //   if (!counter[arr[i]]) {
  //     counter[arr[i]] = 1;
  //   } else {
  //     counter[arr[i]]++;
  //   }
  // }

  // console.log(counter);

  // for (let i = 0; i < arr.length; i++) {
  //   let possibleNum = arr[i] + 1;
  //   if (counter[possibleNum] in counter) {
  //     count++;
  //   }
  // }
  return count;
}

// const test = (func) => {
//   console.log(func([1, 2, 3]) === 2);
//   console.log(func([1, 1, 3, 3, 5, 5, 7, 7]) === 0);
//   console.log(func([1, 3, 2, 3, 5, 0]) === 3);
//   console.log(func([1, 1, 2, 2]) === 2);
//   console.log(func([1, 1, 2]) === 2);
// };

const test = func => {
  console.log( func([1,2,3]) === 2 );
  console.log( func([1,1,3,3,5,5,7,7]) === 0 );
  console.log( func([1,3,2,3,5,0]) === 3 );
  console.log( func([1,1,2,2]) === 2 );
  console.log( func([1,1,2]) === 2 );
  console.log( func([1,2,3,1]) === 3 );
  console.log( func([1,1,1,2,1,1]) === 5 );
};

// const test = (func) => {
//   console.log(func([1, 2, 3, 1]) === 3);
// };

test(countConsecutives);
