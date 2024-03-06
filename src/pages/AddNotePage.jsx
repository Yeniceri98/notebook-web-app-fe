import { useState } from 'react';
import NoteForm from '../components/NoteForm';
import { useNavigate, useParams } from 'react-router-dom';
import { addNote } from '../api/apiService';

const AddNotePage = () => {
	const [username, setUsername] = useState('ahmet');

	const { id } = useParams();
	const navigate = useNavigate();

	const submitHandler = (values) => {
		console.log(values);

		const note = {
			id: id,
			username: username,
			content: values.content,
			targetDate: values.targetDate,
			isDone: values.isDone === 'true' ? true : false,
		};

		addNote(username, note)
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

	return <NoteForm onSubmit={submitHandler} validate={validateHandler} />;
};
export default AddNotePage;
