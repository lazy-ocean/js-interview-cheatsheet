# JS Fundamentals

## Data types

#### 1. Primitives

- Number:
  - numbers
  - floating point numbers
  - positive and negative infinity (when dividing by 0 or set explicitly) (Number.MAX_SAFE_INTEGER, ...)
  - NaN (wrong math operations, operations with NaNs)
  - BigInt - any number >/< of 2^53-1.
    To announce `BigInt` add n at the end of the number:

```
const bigInt = 4872343298732847239847n
```

- String
- Boolean
- `undefined` - value has not been defined, function that doesn't return anything, unset object property
- Symbol - anonymous, unique value

#### 2. `null`

Usually explicitly set.

#### 3. Structural types

- Object types:
  objects, arrays, maps, sets, date, etc.
- Functions.

Check with `typeof x`

---

## Tricky comparison operators

**`==` - equality**

Attempts to convert and compare operands that are of different types.

- with objects `true` only if they're the same objects
- number with string - string converts to number

**`===` - identity**

Strict identity, items of different types are always different.

**Null & undefined:**

```
null == undefined // true
null === undefined // false

null == null || null === null // true
undefined == undefined || undefined === undefined // true

0 == null // false
0 == undefined // false
```

---

## ECMAScript2015 (ES6)

What's new:

- Arrow functions
- Classes
- Template strings

Those with '``' - grave accents, available to concatenate different parts into a single string:

```
console.log(`Hi ${name}!`)
```

- Enhanced Object Literals

So `{ cat: cat, meow: meow }` works just like `{ cat, meow }`

- Destructuring

```
let [blah1, blah2, blah3] = arr;
let [head, ...tail] = [1, 2, 3, 4];
let { firstName, lastName, position, yearHired } = employee
```

- Promises
- Generators (function\*)

```
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);
console.log(gen.next().value); // expected output: 10
console.log(gen.next().value); // expected output: 20
```

- Modules (import and export)

Earlier worked with CommonJS-NodeJS & AMD

- Symbol
- Sets

Collections of unique values, use delete(), add(), has(), size() and clear() methods.

```
const set1 = new Set()
const set2 = new Set(['a','b','c','d','d','e']) // => ['a','b','c','d','e']
```

- Default values
- Rest (indef number of arguments to the function) & Spread (join arrays)
- Let & Const

---

## ECMAScript 2022

### Top-level `await` in modules

**Old:**

```
await Promise.resolve(console.log('🎉'));
// → SyntaxError: await is only valid in async function

(async function() {
  await Promise.resolve(console.log('🎉'));
  // → 🎉
}());
```

**New:**

```
await Promise.resolve(console.log('🎉'));
// → 🎉
```

### `error.cause`

```
try {
        // ···
      } catch (error) {
        throw new Error(
          `While processing ${filePath}`,
          {cause: error}
        );
      }
```

### `.at()`

For strings and arrays

```
> ['a', 'b', 'c'].at(0)
'a'
> ['a', 'b', 'c'].at(-1)
'c'
```

### `Object.hasOwn()`

Replaces `Object.hasOwnProperty()`. Works with `Object.create(null)`.

---

## Event loop

Stack-Heap-Queue dynamics + event loop as it is: dequeue event, call its callback and pop next item from the call stack.

---

## AJAX

AJAX = Asynchronous JavaScript And XML. In a nutshell, it is the use of the `XMLHttpRequest` object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

---

## Node.js & npm

**Node.js** is a web app framework built on Chrome's JS engine (V8). It allows (or used) to use an environment on wich a JS code could be executed and therefore executed not only in browser but on every machine with Node, or on server.  
**npm** - Node package manager, access node.js packages, modules to use in your projects and is also an utility to execute commands in command line (instal dependencies, serve your project, build etc.)

---

## Scope

Scope is basically a concept of how variables are accessed from within a function and inside of it. Every function has its scope and other functions have no access to each others, but they have to global scope, There're also nested scopes.
