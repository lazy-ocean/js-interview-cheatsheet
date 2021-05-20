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

useEffect, useMemo, useState, useRef

## Some bits on hooks

#### `useEffect`

- you can return from `useEffect` hook: usually it is a function that is called when the useEffect is cleaned up, so basically first return function (cleaning up) and then useEffect function itself. E.g., used for add-remove event listeners.

#### `useMemo`

May be used to check for changes in the objects:

```
// Right way:
const params = useMemo(() => {
    return { param1, param2, param3: 5 }
  }, [param1, param2])

// Wrong: new object is created each render
// and obj1 = {one: 1} is not equal to obj2 = {one: 1}
// cause JavaScript.
const params = { param1, param2, param3: 5 }
  useEffect(() => {
    callApi(params)
  }, [params])
```

#### `useCallback`

Just like `useMemo`, not gonna rerun the code inside unless some dependency changed. But instead of caching values, it is caching functions. If dependencies do not change, the function would not be called.

```
// function would be stored
useCallback(() => {
  return a + b
}, [a, b])

// function would be executed and value stored
useMemo(() => {
  return () => a + b
}, [a, b])

```

#### `useReducer`

Redux-like logic: dispatcher function managing state change (mainly switch), state, actions, functions-callbacks that call reducer function with argumented action and other arguments as a payload.

```
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'increment',
  CHANGE_COUNT: 'increment',
}

const reducer = (count, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count + 1
    case ACTIONS.INCREMENT:
      return count - 1
    case ACTIONS.CHANGE_COUNT:
      return count + action.payload.amount
    default:
      return count
  }
}

function Counter() {
  // count - state, reducer - callback, 0 - initial value
  const [count, dispatch] = useReducer(reducer, 0)

  // onClick dispatch is called with object that contains type = action and payload = callback function arguments
  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>
        +
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>
        -
      </button>
      <button onClick={() => {
        dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { amount: 5 } })
      }}>
        Add 5
      </button>
    </>
  )
}
```

#### `useContext`

Using `React.createContext` and `< 'context name'.Provider value='some value'/>` we can make this value accessible for every children of this provider component via `useContext` hook.

#### `useRef`

Refs, unlike state, do not cause your component to rerender when changes. May be useful not only for accessing html elements (for example, for focus persistance), but refs can also be used for any form of storage that is persisted across component renders. For example, for storing the previous value of a state variable.

```
function Component() {
  const [age, setAge] = useState(26)
  const previousAge = useRef(null)

  useEffect(() => {
    previousAge.current = age
  }, [age])

  return (
    <>
      <input value={age} onChange={e => setAge(e.target.value)} />
      <div>I was {previousAge} years old but now I am {age} years old</div>
    </>
  )
}

```
