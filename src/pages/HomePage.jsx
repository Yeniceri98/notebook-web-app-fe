import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const HomePage = () => {
	const { isAuthenticated } = useContext(AuthContext);
	console.log(isAuthenticated);

	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-md-6 offset-md-3">
					<div className="text-center">
						<h1>Welcome to Notebook App</h1>
						{isAuthenticated === true ? (
							<div className="successMessage">You can see the notes...</div>
						) : (
							<div className="errorMessage">You must Login to reach notes!</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default HomePage;
