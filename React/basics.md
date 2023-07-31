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

Mounting = insterting into the DOM.

- `componentWillMount()` – Executed just before rendering takes place both on the client as well as server-side.
- `componentDidMount()` – Executed on the client side only after the first render.
- `componentWillReceiveProps()` – Invoked as soon as the props are received from the parent class and before another render is called.
- `shouldComponentUpdate()` – Returns true or false value based on certain conditions.
- `componentWillUpdate()` – Called just before rendering takes place in the DOM.
- `componentDidUpdate()` – Called immediately after rendering takes place.
- `componentWillUnmount()` – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.

## React 18

1. Concurrency

Different view on rendering, which enables React to prepare multiple versions of UI at the same time without bloking the main rendering thread + rendering is interruptible now (useTransition)
Most of the concurrency features are more of a responsibility of frameworks and libraries like Next.js or TanStack Query etc.
Adopted gradually, useful to use strict mode which highlights potential issues with concurrency and double invokes functions.

2. Batching

Before: every state update causes rerender except for the updates inside React event handlers. Now: React groups multiple state updates into a single re-render.

3. Transition

Moving into urgent updates (direct interactions i.e. click type etc) vs UI updates territory (UI transitions). This is like a React-native throttle. Used with a `useTransition` hook or a `startTransition` func

4. Server `Suspense`

5. New hooks:

- `useId`: not for list ids, rather for unique ids sharing between server & client
- `useTransition`
- `useDeferredValue`: hook for debounced values
- `useSyncExternalStore`, `useInsertionEffect`: for libraries use.
