/*
Instead of searching an array at index 0, 1, 2, 3, 4, and so on like we do in a For Loop, Binary Search allows us to divide our search in half each time we look for a target value.
We define a middleIndex or midpoint from the element in the middle of the array (Divide) to see if our target value is greater than or less than the middleIndex or midpoint. Depending on if the target value is greater than or less than the middleIndex, we can remove the left or right of our array from our search (Conquer).
So, we take start index as 0, finish as the last index - 5;
Middle index is 2, so middle number is 5
5 !== 7, 5 < 7, so start index is now 2 + 1 = 3;
Next iteration, startI = 3, finishI is still 5;
MiddleI is 4, middle number is 8
8 !== 7, 8 > 7, so finishI = 4 - 1 = 3;
Next iteration, startI is still 3, finishI = 3;
MiddleI is 3, middle number is 7
7 === 7, target is found.
*/

const binarySearch = (arr, num) => {
  let startI = 0;
  let finishI = arr.length - 1;

  while (startI <= finishI) {
    const middleI = Math.floor((startI + finishI) / 2);
    if (arr[middleI] === num) return middleI;
    arr[middleI] < num ? (startI = middleI + 1) : (finishI = middleI - 1);
  }
  return false;
};

console.log(binarySearch([1, 3, 5, 7, 8, 9], 7));
