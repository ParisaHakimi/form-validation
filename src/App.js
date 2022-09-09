import { useState, useReducer } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    // const newUsers = [...users];
    // newUsers.push({ fname, lname, email });
    // setUsers(newUsers);
    // setFname("");
    // setLname("");
    // setEmail("");
  };
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

  return (
    <div className="App">
      <form action="" className="form" onSubmit={formHandler}>
        <div className="input-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default App;
