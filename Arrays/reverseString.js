// Create a function that reverses a string:
// 'Hi My name is Sang' should be:
// 'gnaS si eman yM iH'

// method 1
function reverse(str) {
  // check if it is undefined or string is less than 1 or it is string type
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'not a valid string type';
  }

  const reversedStr = [];
  const strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedStr.push(strArr[i]);
  }
  return reversedStr.join('');
}

console.log(reverse('Hi My name is Sang'));

// method 2
function reverseTwo(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr;
}

console.log(reverseTwo('Hi My name is Sang'));

// method 3
const reverseThree = (str) => [...str].reverse().join('');

console.log(reverseThree('Hi My name is Sang'));
