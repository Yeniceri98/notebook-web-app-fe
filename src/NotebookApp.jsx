import './NotebookApp.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListNotesPage from './pages/ListNotesPage';
import UpdateNotePage from './pages/UpdateNotePage';
import AddNotePage from './pages/AddNotePage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import AuthProvider from './context/AuthProvider';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import RegisterPage from './pages/RegisterPage';

const NotebookApp = () => {
	return (
		<div className="notebookApp">
			<AuthProvider>
				<Router>
					<Header />
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/home" element={<HomePage />} />
						<Route path="/notes" element={<ListNotesPage />} />
						<Route path="/update-note/:id" element={<UpdateNotePage />} />
						<Route path="/add-note" element={<AddNotePage />} />
						<Route path="/logout" element={<LogoutPage />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</Router>
			</AuthProvider>
		</div>
	);
};
export default NotebookApp;
