/*
The idea behind bubble sort is that every pair of adjacent values is compared, and then the two values swap positions if the first value is greater than the second. 
So, taking first number (i = 0, n = 5)
5 > 3
swapping 5 and 3 so => [3, 5, 1, 4, 6]
next is 5 > 1 so => [3, 1, 5, 4, 6]
next is 5 > 4, so [3, 1, 4, 5, 6]
next is 5 < 6, so everything stays as it is => [3, 1, 4, 5, 6]
swap is still true on this while loop, but the number of steps is decreasing, as as we see, the biggest number of this interation is always going to be swapped on the last place.
so we repeating this process until no swaps is done during the loop.
*/
const bubble = (arr) => {
  let swap = true;
  let steps = arr.length;
  while (swap) {
    swap = false;
    for (let i = 0; i < steps; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    steps--;
  }
  return arr;
};

console.log(bubble([5, 3, 1, 4, 6]));
