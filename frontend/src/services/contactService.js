import axios from 'axios';

const API_URL = '/api/contacts';

export const getContacts = () => {
  return axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

export const createContact = (contact) => {
  return axios.post(API_URL, contact, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

export const updateContact = (id, contact) => {
  return axios.put(`${API_URL}/${id}`, contact, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

export const deleteContact = (id) => {
  return axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
