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
