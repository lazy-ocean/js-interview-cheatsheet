# DOM API

## Event propagation

When some DOM event is happening, it goes from `Window` to the `event.target` element that triggered the event. With this event goes through all parents of `event.target`.

#### Bubbling (phase)

Bubbling phase is when the event starts from `event.target` element and consequently goes to the `Window` through all parents:
HTML:

```
<ul>
  <li>
    <a href="#">
      <img src="#" alt="">
    </a>
  </li>
</ul>
```

Event triggered on `<img>`, which is `event.target`, will be also triggered on `<a>`, `<li>`, `<ul>`, `<body>`, `<html>`,`<document>,` `<window>`.

`addEventListener` has two `capture` options: it is `false` by default when bubbling triggers the events:

- So, when you first click on `<img>`, **Capture phase** starts when the event goes through all the ancestors chain to the element. Then when it reaches the target, `<img>`, **Target phase** starts when event is triggered on the item. And then **Bubbling phase** goes on when the event goes back up through ancestors calling handlers on its way.

When set to `true`, it goes other way around:

- When you click on `<img>`, **Capture phase** starts when the event is triggered on all the ancestors right to the element, starting from `Window` to `document`, `HTML`, etc. When it reaches the target, `<img>`, **Target phase** starts when event is triggered on the item and event is terminated.
