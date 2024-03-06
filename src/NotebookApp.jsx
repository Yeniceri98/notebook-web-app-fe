import './NotebookApp.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListNotesPage from './pages/ListNotesPage';
import UpdateNotePage from './pages/UpdateNotePage';
import AddNotePage from './pages/AddNotePage';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';

const NotebookApp = () => {
	return (
		<div className="notebookApp">
			<Router>
				<Header />
				<Routes>
					<Route path="/home" element={<HomePage />} />
					<Route path="/notes" element={<ListNotesPage />} />
					<Route path="/update-note/:id" element={<UpdateNotePage />} />
					<Route path="/add-note" element={<AddNotePage />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</div>
	);
};
export default NotebookApp;
