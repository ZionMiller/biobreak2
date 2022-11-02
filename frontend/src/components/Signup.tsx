import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface SignupProps {
  updateUser: (user: any) => void;
}

const Signup: React.FC<SignupProps> = ({ updateUser }: SignupProps) => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    first: "",
    last: "",
  });

  //Make a passwords don't match error message
  useEffect(() => {}, [formState.password, formState.passwordConfirmation]);

  const handleChange = (e: any) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormState(formState);
    console.log(`current state: ${JSON.stringify(formState)}`);

    fetch(`signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
          navigate("/login");
        });
      } else {
        // working on error rendering here
        // res.json().then(json => setErrors(Object.entries(json.errors)))
      }
    });
  };

  return (
    <div className="signup-login columns">
      <div className="column is-half is-offset-one-quarter">
        <div className="field">
          <label className="label">First name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="first"
              name="first"
              value={formState.first}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="last"
              name="last"
              value={formState.last}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-success"
              type="text"
              placeholder="username"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
          <p className="help is-success">This username is available</p>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input
              className="input is-danger"
              type="email"
              placeholder="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>
      <div className="column">
        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="password"
              value={formState.password}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="confirmation">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              name="passwordConfirmation"
              placeholder="retype password"
              value={formState.passwordConfirmation}
              onChange={handleChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" />I agree to the{" "}
              {/* TODO Modal here for users to view the contract to sell their soul */}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
