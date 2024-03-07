import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
	const { isAuthenticated, setIsAuthenticated, setUsername, setPassword } =
		useContext(AuthContext);

	const handleLoginLogoutRegister = () => {
		setIsAuthenticated(null);
		setUsername('');
		setPassword('');
	};
	return (
		<header className="border-bottom border-light border-5 mb-5 p-2">
			<div className="container">
				<div className="row">
					<nav className="navbar navbar-expand-sm">
						{isAuthenticated && (
							<div className="collapse navbar-collapse">
								<ul className="navbar-nav">
									<li className="nav-item fs-5">
										<Link className="nav-link" to="/home">
											Home
										</Link>
									</li>
									<li className="nav-item fs-5">
										<Link className="nav-link" to="/notes">
											Notes
										</Link>
									</li>
								</ul>
							</div>
						)}
						<ul className="navbar-nav">
							<li className="nav-item fs-5">
								<Link
									className="nav-link"
									to="/register"
									onClick={handleLoginLogoutRegister}>
									Register
								</Link>
							</li>
							<li className="nav-item fs-5">
								<Link className="nav-link" to="/" onClick={handleLoginLogoutRegister}>
									Login
								</Link>
							</li>
							<li className="nav-item fs-5">
								<Link
									className="nav-link"
									to="/logout"
									onClick={handleLoginLogoutRegister}>
									Logout
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Header;
