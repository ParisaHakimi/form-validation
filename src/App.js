import { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = {
    firstName: {
      value: "",
      error: null,
    },
    lastName: {
      value: "",
      error: null,
    },
    email: {
      value: "",
      error: null,
    },
  };
  function reducer(state, action) {
    return { ...state, [action.input]: action.value };
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  function onChange(e) {
    const action = {
      input: e.target.name,
      value: e.target.value,
    };
    dispatch(action);
  }
  return (
    <div className="App">
      <form action="" className="form">
        <div className="input-group">
          <label htmlFor="">First Name</label>
          <input type="text" onChange={onChange} name="firstName" />
        </div>
        {state.firstName.error !== null && (
          <p className="error">{state.firstName.error}</p>
        )}
        <div className="input-group">
          <label htmlFor="">Last Name</label>
          <input type="text" onChange={onChange} name="lastName" />
        </div>
        <div className="input-group">
          <label htmlFor="">Email</label>
          <input type="text" onChange={onChange} name="email " />
        </div>
      </form>
    </div>
  );
}

export default App;
