// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(arr1, arr2) {
  // check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  const sortedArr = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 0;
  let j = 0;

  while (arr1[i] || arr2[j]) {
    // we are allowed to account for !arr2[j] since 'else' will account for everything
    // else that the other half isn't accounted by pushing arr2[j] if !arr1[i] or arr[i] < undefined
    if (!arr2[j] || arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++;
    } else {
      sortedArr.push(arr2[j]);
      j++;
    }
  }

  return sortedArr;
}

console.log(mergeSortedArrays([0, 3, 4, 31, 34], [4, 6, 30]));

function mergeSortedArrays2(arr1, arr2) {
  const sortedArr = arr1.concat(arr2).sort((a, b) => a - b);
  return sortedArr;
}

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
