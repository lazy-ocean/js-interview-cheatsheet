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

All JS functions use closure: it is the opportunity to get to the outer and global lexical environment variables that are referenced in the function, this way function can not only use but modificate outer environment variables.

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

## Bind

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
