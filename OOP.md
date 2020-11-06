# OOP

## Classes

Classes are a template for creating objects and they encapsulate data. Classes are functions.

> Encapsulation 'hides' the values or state, or any data inside a class so there's no direct access to it - no wrong manipulation or use.

Classes are not hoisted, you need to declare class first, then access.

#### Static

Static methods are used to implement functions that belong to the whole class, not the particular objects of it, so:

```
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1))
];

articles.sort(Article.compare); // accessible only by class name.
```

## Polymorphism

An ability to call the same method on different objects, objects may share methods with subclasses and these methods could be overwritten by specific ones (inheritance).

**General class:**

```
class Human {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(`Hi! My name is ${name}`)
  }
}
```

**Subclasses:**

```
class Developer extends Human () {
  sayHi() {
    console.log(`Hi! My name is ${name}. I am a developer.`)
  }
}

class Designer extends Human () {
  sayHi() {
    console.log(`Hi! My name is ${name}. I am a designer.`)
  }
}
```

**Aaand usage:**

```
const zell = new Human('Zell')
const vincy = new Developer('Vincy')
const tim = new Designer('Tim')

zell.sayHi() // Hi! My name is Zell.
vincy.sayHi() // Hi! My name is Vincy. I am a developer.
tim.sayHi() // Hi! My name is Tim. I am a designer.
```
