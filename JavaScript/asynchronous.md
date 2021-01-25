# Asynchronous

## `new Promise`

A Promise is a proxy (wrapper) for a value not necessarily known when the promise is created. It allows to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

## `setTimeout`

Regular `setTimeout`: it executes a function every 100 ms BUT the time count starts **not after the function has finished an execution**, but right after its call. So the time between function execution is less than 100, depending on the function.

```
let i = 1;
setInterval(function() {
  func(i);
}, 100);
// if func executes long enough, the interval between results is less than 100
```

The right way is to use recursive `setTimeout`:

```
let i = 1;
setTimeout(function run() {
  func(i); // executing a func
  setTimeout(run, 100); // starting new time count right after execution
}, 100);
```

---

## Sleep function

```
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

sleep(500).then(() => {
  //do stuff
})
```
