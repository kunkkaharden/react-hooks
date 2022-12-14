import useCounter from "../../hooks/useCounter"
import "./counter.css"

export default function CounterCustomHook() {
   const {state, increment, decrement, reset} = useCounter();
  return ( <>
    <h1>Counter {state} </h1>

    <hr />

    <button 
    className="btn btn-primary"
    onClick={() => increment(2)}
    > +1 </button>
    <button 
    className="btn btn-primary"
    onClick={() => decrement(2)}
    > -1 </button>

<button 
    className="btn btn-primary"
    onClick={() => reset()}
    > reset </button>
</>)
}