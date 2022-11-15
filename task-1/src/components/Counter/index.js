import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch(action) {
    case 'ADD':
      return state += 1;
    case 'DEL':
      return state -= 1;
    default:
    return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
 // const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => {dispatch('ADD')}}>+</button>
      <p>{count}</p>
      <button onClick={() => {dispatch('DEL')}}>-</button>
    </div>
  );
}

export default Counter;
