import "./app.css";

import Input from "../Input";
import List from "../List";
import { useReducer } from "react";

// - `cd` to the `task-2` folder.
// - Refactor the `names` state to use `useReducer` instead when adding names to the list.

function reducer(state, action) {
  console.log("REDUCER state: ", state);
  console.log("REDUCER action: ", action);
  switch(action.type) {
    case "UPDATE":
      return { ...state, input: action.payload };
    case "ADD":
    return ({name: [...state], input: state.input});
    default:
      return state;
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, {name: [], input: ""})

  return (
    <main>
      <Input state={state} dispatch={(e) => dispatch({ type: "UPDATE", payload: e.target.value })} />
      <List items={state.name} />
    </main>
  );
}

export default App;
