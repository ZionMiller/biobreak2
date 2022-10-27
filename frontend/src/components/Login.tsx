import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface userProps{

}

const Login: React.FC<userProps> = ({}) => {

          //storing data from the form
          const [formData, setFormData] = useState({
            username: "",
            password: ""
        })
        
    
        //to display the errors
        const [errors, setErrors] = useState([])
    
        //gives you access to the history instance that you may use to navigate.
        const navigate = useNavigate()
    
        const handleSubmit = () => {
            // e.preventDefault()
            setFormData(formData);
    
            //make post request on submit
           fetch(`/login`,{
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formData)
          })
          .then(res => {
            if(res.ok){
                res.json().then(user => {
                    // updateUser(user);
                    navigate("/profile")
                })
            }else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    
          //reset form
          setFormData({
            username: "",
            password: ""
          })
        }
    
        const handleChange = () => {
            setFormData({...formData,
                // [e.target.name]: e.target.value
                })
        }

const Login = (): any => {

  return (
    <div className="signup-login columns">
      <div className="column">
        {" "}
        <div className="field">
          <label className="label">Email</label>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>

      <div className="field">
        <p className="control">
          <button className="button is-success">Login</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
