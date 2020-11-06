# Asynchronous

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
