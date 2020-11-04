# Objects

---

## Copying

This way, there're no separate objects: there're two _links_ on original one:

```
let animal = { name: "cat" };
let pet = animal;
pet.name = "dog";
console.log(animal.name) = "dog" \\ new value!
```

Logically,

```
animal == pet // true
animal === pet // true
```

To deep clone/copy to get two independent object, use Lodash's `_.cloneDeep` or `Object.assign(res, src)`, or recursively copy data.

> Object.assign doesn't work well with nested objects - it would be copied as link. Use lodash if possible.
