# React Hooks

#### `useEffect`

- you can return from `useEffect` hook: usually it is a function that is called when the useEffect is cleaned up, so basically first return function (cleaning up) and then useEffect function itself. E.g., used for add-remove event listeners.

#### `useMemo`

Used for expensive calculations (like filtering), but on moderate once will just keep your value out of recalculating, i.e. skipping unnecessary work. This is not a heavy performance optimization, but there's no harm in doing so either.
BUT it is recommended if a value is a dependency of some other hook, like `useCallback` functions or `useEffect` effects.

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
