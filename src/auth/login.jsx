import { useState , useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { UserContext} from "../App";
import baseUrl from "../url";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
  const [user , setUser] = useContext(UserContext);

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
      console.log(data)
			const url = baseUrl + "/login";
			const res = await axios.post(url, data);
      const temp ={
        username : res.data.user.username,
        email : res.data.user.email,
        type: res.data.user.type
      }
			localStorage.setItem("token", res.data.token);
      setUser(temp);
      localStorage.setItem("user", JSON.stringify(temp));
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
						<h1>Login to Your Account</h1>
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
						{error && <div className="error_msg">{error}</div>}
						<button type="submit" className="green_btn">
							Sign In
						</button>
					</form>
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className="white_btn">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		// </div>
	);
};

export default Login;