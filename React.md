# React JS

## Why React

1. Virtual DOM - re-rendering DOM only with the different nodes, not the whole tree.
2. Interfaces as functions = easily reusable and stateful components
3. It is JS-based, it doesn't expand JavaScript as Angular JS does.
4. JSX is simple to use and understand
5. React Native exists
6. Well defined lifecycle (render, componentDidMount, componentWillUnmount, componentDidUpdate, etc ===> useState, useEffect, useMemo)
7. Easy to test (Jest, Enzyme)

## React in a nutshell

Frontend JS library, not really a framework (a lot of instruments should be added for it to build an app, like builders, routing, testing, Babel), based on components-wise approach.  
Main features are:

- Virtual DOM
- Server-side rendering (dynamic components being served to the client as a static HTML).

## Virtual DOM

VD is a copy of the real DOM, and React renders a node tree out of the React components.  
Every render triggers entire UI being re-rendered in VD, and a previous copy of DOM with the new one compare. Only updated nodes are actually rendered.

## Lifecycle methods

- `componentWillMount()` – Executed just before rendering takes place both on the client as well as server-side.
- `componentDidMount()` – Executed on the client side only after the first render.
- `componentWillReceiveProps()` – Invoked as soon as the props are received from the parent class and before another render is called.
- `shouldComponentUpdate()` – Returns true or false value based on certain conditions.
- `componentWillUpdate()` – Called just before rendering takes place in the DOM.
- `componentDidUpdate()` – Called immediately after rendering takes place.
- `componentWillUnmount()` – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.

useEffect, useMemo, useState, useRef
