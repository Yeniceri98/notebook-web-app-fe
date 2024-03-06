import axios from 'axios';

export const apiClient = axios.create({
	baseURL: 'http://localhost:8080',
});

export const retrieveAllNotesOfUser = (username) => {
	return apiClient.get(`/api/notebook/${username}/notes`);
};

export const retrieveSingleNoteOfUser = (username, id) => {
	return apiClient.get(`/api/notebook/${username}/notes/${id}`);
};

export const addNote = (username, todo) => {
	return apiClient.post(`/api/notebook/${username}/notes`, todo);
};

export const updateNote = (username, id, todo) => {
	return apiClient.put(`/api/notebook/${username}/notes/${id}`, todo);
};

export const deleteNoteOfUser = (username, id) => {
	return apiClient.delete(`/api/notebook/${username}/notes/${id}`);
};
