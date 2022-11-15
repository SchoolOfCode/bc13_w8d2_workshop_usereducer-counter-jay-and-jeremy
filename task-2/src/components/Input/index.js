import { useState } from "react";
import "./input.css";

function Input({ dispatch, state }) {
  return (
    <div id="input">
      <label>
        Bootcamper name: <input value={state.input} onChange={dispatch} />
      </label>
      <button
        onClick={() => {
          dispatch({type: "ADD"})
        }}
      >
        Add to bootcamper list
      </button>
    </div>
  );
}

export default Input;
