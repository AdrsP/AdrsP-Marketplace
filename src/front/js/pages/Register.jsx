import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert("Error las contraseñas no coinciden");
    } else if ((username !== "") & (password !== "") & (email !== "")) {
      const response = await actions.register(username, email, password);
      response !== 400
        ? navigate("/")
        : alert("usuario registrado previamente");
    } else {
      alert("faltan campos");
    }
  };

  return (
    <main className="m-5 p-5">
      <h1 className="text-center">Register</h1>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="validationDefault01" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="validationDefaultEmail" className="form-label">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationDefaultEmail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              aria-describedby="inputGroupPrepend2"
            />
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationDefault02" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationDefault02"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="col-md-6">
          <label for="validationDefault03" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="validationDefault03"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
            />
            <label className="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            onClick={(e) => handleClick(e)}
            className="btn btn-primary"
            type="submit"
          >
            Register Now!!
          </button>
        </div>
      </form>
    </main>
  );
};
