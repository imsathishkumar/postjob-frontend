import { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { UserContext } from "../App";
import baseUrl from "../url"

const Signup = () => {
  const [data, setData] = useState({ email: "", password: "",username:"",type:"professional" });
  const [error, setError] = useState("");
  const [user, setUser] = useContext(UserContext);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const url = baseUrl + "/signup";
      const res = await axios.post(url, data);
      setUser({
        username:data.username,
        email:data.email,
        type:data.type
      });
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    // <div className="login_container">
    <div className="login_form_container">
      <div className="left_container">
        <form className="form_container" onSubmit={handleSubmit}>
          <h1>Create Your Account</h1>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
            value={data.username}
            required
            className="input"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
            required
            className="input"
          />
          <select
            name="type"
            onChange={handleChange}
            value={data.type}
            required
            className="input"
          >
            <option value="professional">Professional</option>
            <option value="company">Company</option>
          </select>
          {error && <div className="error_msg">{error}</div>}
          <button type="submit" className="green_btn">
            Sing Up
          </button>
        </form>
      </div>
      <div className="right">
        <h1>Already have a Account</h1>
        <Link to="/login">
          <button type="button" className="white_btn">
            Login
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Signup;
