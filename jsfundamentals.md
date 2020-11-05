# JS Fundamentals

## Data types

#### 1. Primitives

- Number:
  - numbers
  - floating point numbers
  - positive and negative infinity (when dividing by 0 or set explicitly)
  - NaN (wrong math operations, operations with NaNs)
- BigInt - any number >/< of 2^53-1.
  To announce `BigInt` add n at the end of the number:

```
const bigInt = 4872343298732847239847n
```

- String
- Boolean
- `undefined` - value has not been defined
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
