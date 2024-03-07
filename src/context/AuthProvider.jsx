import { createContext, useState } from 'react';

// Creating a Context
export const AuthContext = createContext();

function AuthProvider({ children }) {
	const [isAuthenticated, setIsAuthenticated] = useState(null);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const logout = () => {
		setIsAuthenticated(false);
		setUsername('');
		setPassword('');
	};

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				setIsAuthenticated,
				username,
				setUsername,
				password,
				setPassword,
				logout,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
