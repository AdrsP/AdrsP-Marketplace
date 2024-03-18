import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    if ((email != "") & (password != "")) {
      let resp = await actions.login(email, password);
      if (resp) {
        navigate("/market");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Datos erroneos",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Faltan completar datos",
      });
    }
  };

  return (
    <main className="m-5 p-5">
      <h1 className="text-center">Login</h1>
      <form className="row g-3">
        <div className="row">
          <div className="col-md-6 mx-auto mt-2">
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
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto mt-2">
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
        </div>
        <div className="col-12 text-center mt-2">
          <button className="btn btn-primary btn-large" type="submit">
            Login Now !!
          </button>
        </div>
      </form>
    </main>
  );
};
