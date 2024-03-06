import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="border-bottom border-light border-5 mb-5 p-2">
			<div className="container">
				<div className="row">
					<nav className="navbar navbar-expand-sm">
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
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Header;
