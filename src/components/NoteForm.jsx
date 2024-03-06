import { ErrorMessage, Field, Form, Formik } from 'formik';

const NoteForm = ({ content, targetDate, isDone, onSubmit, validate }) => {
	return (
		<Formik
			initialValues={{ content, targetDate, isDone }}
			enableReinitialize={true}
			onSubmit={onSubmit}
			validate={validate}
			validateOnChange={false}
			validateOnBlur={false}>
			<Form>
				<ErrorMessage name="content" component="div" className="alert alert-danger" />
				<ErrorMessage name="targetDate" component="div" className="alert alert-danger" />
				<ErrorMessage name="isDone" component="div" className="alert alert-danger" />
				<fieldset className="form-group mt-3">
					<label>Content</label>
					<Field type="text" className="form-control" name="content" />
				</fieldset>
				<fieldset className="form-group mt-3">
					<label>Target Date</label>
					<Field type="date" className="form-control" name="targetDate" />
				</fieldset>
				<div role="group" aria-labelledby="my-radio-group">
					<label>Is It Done?</label>
					<label>
						<Field type="radio" name="isDone" value="true" />
						Yes
					</label>
					<label>
						<Field type="radio" name="isDone" value="false" />
						No
					</label>
				</div>
				<div>
					<button className="btn btn-success mt-5" type="submit">
						Save
					</button>
				</div>
			</Form>
		</Formik>
	);
};
export default NoteForm;
