import axios from 'axios';

export const apiClient = axios.create({
	baseURL: 'http://localhost:8080',
});

export const retrieveAllNotesOfUser = (username) => {
	return apiClient.get(`/api/${username}/notes`);
};

export const retrieveSingleNoteOfUser = (username, id) => {
	return apiClient.get(`/api/${username}/notes/${id}`);
};

export const addNote = (username, note) => {
	return apiClient.post(`/api/${username}/notes`, note);
};

export const updateNote = (username, id, note) => {
	return apiClient.put(`/api/${username}/notes/${id}`, note);
};

export const deleteNoteOfUser = (username, id) => {
	return apiClient.delete(`/api/${username}/notes/${id}`);
};

export const registerUser = (user) => {
	return apiClient.post('/api/register', user);
};

export const retrieveRegisteredUser = () => {
	return apiClient.get(`/api/users`);
};
