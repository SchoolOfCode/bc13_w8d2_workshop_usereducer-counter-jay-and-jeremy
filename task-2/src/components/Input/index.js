
import "./input.css";

function Input({ dispatch1, dispatch2, state }) {
  return (
    <div id="input">
      <label>
        Bootcamper name: <input value={state.input} onChange={dispatch1} />
        
      </label>
      <button
        onClick={dispatch2}
      >
        Add to bootcamper list
      </button>
    </div>
  );
}

export default Input;
