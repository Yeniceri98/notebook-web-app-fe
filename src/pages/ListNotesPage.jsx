import { useCallback, useEffect, useState } from 'react';
import { deleteNoteOfUser, retrieveAllNotesOfUser } from '../api/apiService';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const ListNotesPage = () => {
	const [notes, setNotes] = useState();
	const [message, setMessage] = useState();

	const { username } = useContext(AuthContext);

	const navigate = useNavigate();

	const retrieveAllNotes = useCallback(() => {
		retrieveAllNotesOfUser(username)
			.then((res) => {
				console.log(res.data);
				setNotes(res.data);
			})
			.catch((err) => console.log(err))
			.finally(() => console.log('cleanup'));
	}, [username]);

	useEffect(() => {
		retrieveAllNotes();
	}, [retrieveAllNotes]);

	const deleteNoteHandler = (id) => {
		deleteNoteOfUser(username, id)
			.then(() => {
				console.log('Deleted id: ' + id);
				setMessage(`Note is deleted successfully...`);
				retrieveAllNotes();
			})
			.catch((err) => console.log(err));
	};

	const updateNoteHandler = (id) => {
		navigate(`/update-note/${id}`);
	};

	const addNoteHandler = () => {
		navigate('/add-note');
	};

	return (
		<div>
			<h1>NOTES</h1>
			{message && <div className="alert alert-success">{message}</div>}
			<div>
				<table className="table table-striped table-hover mt-3">
					<thead>
						<tr>
							<th>Content</th>
							<th>Target Date</th>
							<th>Is Done?</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{notes &&
							notes.map((note) => (
								<tr key={note.id}>
									<td>{note.content}</td>
									<td>{note.targetDate}</td>
									<td>{note.isDone ? 'Yes' : 'No'}</td>
									<td>
										<button
											className="btn btn-danger m-1"
											onClick={() => deleteNoteHandler(note.id)}>
											Delete
										</button>
										<button
											className="btn btn-warning m-1"
											onClick={() => updateNoteHandler(note.id)}>
											Update
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
				<div>
					<button className="btn btn-success mt-5" onClick={addNoteHandler}>
						Add New Todo
					</button>
				</div>
			</div>
		</div>
	);
};

export default ListNotesPage;
