import { useContext, useState } from 'react';
import NoteForm from '../components/NoteForm';
import { retrieveSingleNoteOfUser, updateNote } from '../api/apiService';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const UpdateNotePage = () => {
	const [content, setContent] = useState('');
	const [targetDate, setTargetDate] = useState('');
	const [isDone, setIsDone] = useState('');

	const { username } = useContext(AuthContext);

	const { id } = useParams();
	const navigate = useNavigate();

	const retrieveNote = useCallback(() => {
		retrieveSingleNoteOfUser(username, id)
			.then((res) => {
				console.log(res.data);
				setContent(res.data.content);
				setTargetDate(res.data.targetDate);
				setIsDone(res.data.isDone);
			})
			.catch((err) => console.log(err))
			.finally(() => console.log('cleanup'));
	}, [username, id]);

	useEffect(() => {
		retrieveNote();
	}, [retrieveNote]);

	const submitHandler = (values) => {
		console.log(values);

		const note = {
			id: id,
			username: username,
			content: values.content,
			targetDate: values.targetDate,
			isDone: values.isDone === 'true' ? true : false,
		};

		updateNote(username, id, note)
			.then((res) => {
				console.log(res);
				navigate('/notes');
			})
			.catch((err) => console.log(err));
	};

	const validateHandler = (values) => {
		const errors = {};

		if (values.content.length <= 5) {
			errors.content = 'Content should have minimum of 5 characters!';
		}

		if (!values.targetDate) {
			errors.targetDate = 'Target Date cannot be empty!';
		}

		if (!values.isDone) {
			errors.isDone = 'Please select an option!';
		}

		console.log(values);
		return errors;
	};

	return (
		<div className="container">
			<h1>Note Details</h1>
			<NoteForm
				content={content}
				targetDate={targetDate}
				isDone={isDone.toString()}
				validate={validateHandler}
				onSubmit={submitHandler}
			/>
		</div>
	);
};
export default UpdateNotePage;
