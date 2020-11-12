# Miscellaneous

## `use strict`

Used before the new-ish (ES5+) code to work by new standarts, it doesn't accept bad syntax (e.g. not declared variables, non-existing property, object, etc), some restricted words (arguments, eval, public, static, etc), duplicating parameters, deleting object properties.

---

## hoisting

JS by default is moving declarations to the top, so when we declare and initialize our variables, it's read like this:

```
let cat = 'meow'; // declare and init

// is read as
let cat;
cat = 'meow';
```

So with ES5 this will work:

```
x = 5;
element.innerHTML = x;

var x; // declared after the initializing
```

But this won't as initializations are **not hoisted**:

```
elem.innerHTML = x;
var x = 5;

// this will be read as:

var x; // hoisted declaration
element.innerHTML = x; // undefined
x = 5; // not hoised initializing
```

In ES6, we should always declare variables (consts and lets) first, otherwise it is a reference error.

---

## Spread & Rest

**Spread**: spread takes an array of parameters and spreads them across the arguments in the function call or any other array. Spread uses iterators to gather elements one by one. Normally allows us to pass an array to something that requires a list of many arguments.

**Rest**: allows us to work with any number of parameters to use as arguments and also 'divide' those arguments (one, two,...rest)

---

## The Big-O notation

#### O(1)

Describes an algorithm that always executes in the same time/space regardless of the input data.

```
const bool = (arr) => {
 if (arr[0] === null) return;
}
```

#### O(N)

Linearly growth: as the size of input data grows, the time/space grow, too. Big O is always the worst case scenario, so we might get not `string.length` loops but less, but we might as well don't find the element of interest after all loops.

```
const find = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] = 'q') return true;
  }
  return false
}
```

#### O(N^2)

Represents an algorithm whose performance is directly proportional to the square of the size of the input data: mostly this is common for algorithms with nested data, with nested iterations over it. May be deeper as well - O(N^3, 4 and such)

```
const bool = (arr) => {
 for (let i = 0, i < arr.length; i++) {
   for (let j = 0; j < 5; j++) {
     if (arr[i][j] === arr[i][j-1]) return;
   }
 }
}
```

#### O(2^N)

Represents an algorithm whose growth doubles with each addition to the input data. Mostly it is recursive algorithms or/and problems where you have to try all possible combinations, so c^N is all possible combinations of N elements from a c-sized alphabet.
Also, Fibonacci numbers, where every next number is the sum of two previous ones.

```
const fibonacci = (num) => {
    if (num <= 1) return num;
    return fibonacci(num - 2) + fibonacci(num - 1);
}
```

#### Logarithms

Take _binary search_, where we have to find an element in a sorted data set: it works by selecting the middle element of data set, compare it with target value, taking the closest half of the data set to the target value and doing it till the element is found (or till it is no longer possible to divide a set). The complexity of such algorithm is **O(logN)** as the dataset is decreased with every iteration.
