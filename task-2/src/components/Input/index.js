import { useState } from "react";
import "./input.css";

function Input({ dispatch }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
    console.log(userInput);
  }

  return (
    <div id="input">
      <label>
        Bootcamper name: <input value={userInput} onChange={handleChange} />
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
