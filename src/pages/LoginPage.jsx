import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { retrieveRegisteredUser } from '../api/apiService';
import { useState } from 'react';
import { useEffect } from 'react';

const LoginPage = () => {
	const [registeredUsers, setRegisteredUsers] = useState([]);

	// Getting props from the context
	const {
		isAuthenticated,
		setIsAuthenticated,
		username,
		setUsername,
		password,
		setPassword,
	} = useContext(AuthContext);

	const navigate = useNavigate();

	const getRegisteredUsers = () => {
		retrieveRegisteredUser()
			.then((res) => {
				setRegisteredUsers(res.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getRegisteredUsers();
	}, []);

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleSubmit = async () => {
		const isUserRegistered = registeredUsers.some(
			(user) => user.username === username && user.password === password
		);
		if (isUserRegistered) {
			navigate(`/`);
			setIsAuthenticated(true);
		} else {
			console.log('Authentication Failed. Please check your credentials...');
			setIsAuthenticated(false);
			setUsername('');
			setPassword('');
		}
	};

	return (
		<div className="container">
			{isAuthenticated === true ? (
				<div className="successMessage">Authentication Successful</div>
			) : (
				isAuthenticated === false && (
					<div className="errorMessage">
						Authentication Failed. Please check your credentials or Register!
					</div>
				)
			)}
			<div className="container">
				<div>
					<h1>Login</h1>
					<label>Username:</label>
					<input
						type="text"
						name="username"
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<label>Password: </label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<button
						className="btn btn-success mt-3"
						type="button"
						name="login"
						onClick={handleSubmit}>
						Login
					</button>
				</div>
			</div>
		</div>
	);
};
export default LoginPage;
