import { useState } from 'react';
import { registerUser } from '../api/apiService';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isSuccess, setIsSuccess] = useState(null);

	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();

		try {
			const user = {
				username: username,
				password: password,
			};
			const response = await registerUser(user);

			if (response.status === 200) {
				setIsSuccess(true);
				navigate('/login');
			} else {
				setIsSuccess(false);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setUsername('');
			setPassword('');
		}
	};

	return (
		<div className="loginRegisterContainer">
			{isSuccess === true ? (
				<div className="successMessage">Registration is Successful!</div>
			) : (
				isSuccess === false && (
					<div className="errorMessage">
						Registration is Failed! Please check your credentials...
					</div>
				)
			)}
			<h2>Register</h2>
			<div className="container">
				<label>Username:</label>
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div>
				<label>Password:</label>
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div>
				<button
					className="btn btn-info mt-3"
					type="button"
					name="register"
					onClick={handleRegister}>
					Register
				</button>
			</div>
		</div>
	);
};
export default RegisterPage;
