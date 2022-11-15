import "./app.css";

import Input from "../Input";
import List from "../List";
import { useReducer } from "react";

// - `cd` to the `task-2` folder.
// - Refactor the `names` state to use `useReducer` instead when adding names to the list.

function reducer(names, action) {
  switch(action.type) {
    case "ADD":
    return {[...state.name], state.input}
    

  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, {name: [], input: ""})
  
  
  function addName(addedName) {
    const updatedNames = [...names, addedName];
    setNames(updatedNames);
  }

  return (
    <main>
      <Input update={dispatch} onChange={dispatch({type: "UPDATE", payload: e.target.value})} />
      <List items={state}   />
    </main>
  );
}

export default App;
