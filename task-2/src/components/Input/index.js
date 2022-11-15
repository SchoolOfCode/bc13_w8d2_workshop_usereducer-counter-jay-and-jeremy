import "./input.css";

function Input({ click, dispatch, state }) {
  return (
    <div id="input">
      <label>
        Bootcamper name: <input value={state} onChange={dispatch} />
      </label>
      <button
        onClick={click}
      >
        Add to bootcamper list
      </button>
    </div>
  );
}

export default Input;
