# Functions

## Function expression

Function **declaration**:

```
function sayHi() {
  console.log('hi');
}
```

Declarations executed in the code flow.

Function **expression**:

```
const hi = function() {
  console.log('hi');
}
```

Expressions executed when explicitly called.
Some languages execute functions automatically if named somewhere, but not JS.

---

## Closure

All JS functions use closure: it is the opportunity to get to the outer and global lexical environment (scope) variables that are referenced in the function, this way function can not only use but modificate outer environment variables.

**Example 1:**

Prints "Pete" as it is the next lexical environment for the unnamed function

```
function makeWorker() {
  let name = "Pete";
  return function() {
    console.log(name);
  };
}

let name = "John";
let work = makeWorker();
work(); // 'Pete'
```

**Example 2:**

Prints 'John' as the unnamed function doesn't have variable `name` in the inner and outer (`makeWorker`'s) lexical scopes, so it searches in the global where the variable `name` was reassigned to 'John'.

```
let name = 'Pete'
function makeWorker() {
  return function() {
    console.log(name);
  };
}

name = "John";
let work = makeWorker();
work(); // 'John'
```

---

## `bind`

```
let user = {
  firstName: "Vlada",
  sayHi() {
    console.log(`Hi, ${this.firstName}!`);
  }
};
```

That won't work because `this` in `sayHi` taken out of context in `setTimeout`:

```
setTimeout(user.sayHi, 1000); // 'Hi, undefined!'
```

This works, because it uses closure to execute:

```
setTimeout(user.sayHi(), 1000); // 'Hi, Vlada!'
```

So with `bind` it works like this:

```
let sayHi = user.sayHi.bind(user);
sayHi(); // 'Hi, Vlada!'
```

Case of use: function with the preset argument:

```
// Sample function:
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);
// null - context, 2 - arg

double(3) // mul(2, 3) = 6
double(4) // mul(2, 4) = 8
double(5) // mul(2, 5) = 10
```

Borrowing a method:

```
let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let run = runner.run.bind(flyer, 20); // Flyer runs at 20 mph.
let fly = flyer.fly.bind(runner, 10); // Runner flies at 10 mph.
```

---

## `call`

Examples of work:

```
function sayHi() {
  alert(this.name);
}
let user = { name: "John" };
let admin = { name: "Admin" };

sayHi.call(user); // John
sayHi.call(admin); // Admin
```

`call` works similar as `apply`, the only difference is how they treat arguments:

```
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
person.fullName.call(person1, "Oslo", "Norway");
```

Practical way of using: use where it is impossible to apply an array as argument:

```
// 1:
let arr = [1, 2, 3];
let numbers = [4, 5, 6];
arr.push.apply(arr, numbers);

// 2:
Math.max.apply(null, [1,2,3]);
```

---

## IIFE - Immediately Invoked Function Expression

IIFE is a function that executes right after its declaration.

```
(function( ) { }( ))

(function( ) { })( )

(function named(params) { })( )

(( ) => { })

(function(global) { })(window)

const utility = (function( ) {
    return {
        //
    }
})
```

---

## Arrow functions vs regular

#### `this`

Regular functions:

- can be a reference to global object (window)
- when used in object, the scope of `this` is that object
- when used in a function with several arguments, `this` references the first argument

Arrow functions:
Arrow functions don't create its local environment, they use outer one, so they don't create its `this`, only use one of outer or global environment.

#### Constructors

As arrow functions don't have its own `this`, you cannot use it to create objects.

#### Arguments

Regular function has an `arguments` object with all the arguments the function has been called with.

```
function myFunction() {
  console.log(arguments);
}
myFunction('a', 'b'); // { 0: 'a', 1: 'b'}
```

Arrow functions don't have `arguments`, you can only get it directly using destructuring:

```
const myArrowFunction = (...args) => {
  console.log(args);
}
myArrowFunction('c', 'd');
```

#### Return

In regular functions `return` used as the only way to return the result of the function. Othervise, `undefined` will be shown.

Arrow functions may return the result automatically, when it has only one expression:

```
const increment = (num) => num + 1;
increment(41); // => 42
```

#### Class methods

Regular functions are mostly used, but you can use arrow functions to avoid using `bind` with `this`, as regular functions will use the outer scope => the object scope.
