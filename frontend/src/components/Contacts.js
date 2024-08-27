import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await axios.get('/api/contacts', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setContacts(response.data);
  };

  const addContact = async (contact) => {
    const response = await axios.post('/api/contacts', contact, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setContacts([...contacts, response.data]);
  };

  const updateContact = async (id, updatedContact) => {
    await axios.put(`/api/contacts/${id}`, updatedContact, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setContacts(
      contacts.map((contact) => (contact._id === id ? updatedContact : contact))
    );
    setEditingContact(null);
  };

  const deleteContact = async (id) => {
    await axios.delete(`/api/contacts/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setContacts(contacts.filter((contact) => contact._id !== id));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <ContactForm
        addContact={addContact}
        updateContact={updateContact}
        editingContact={editingContact}
      />
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            {contact.name} - {contact.email}
            <button onClick={() => setEditingContact(contact)}>Edit</button>
            <button onClick={() => deleteContact(contact._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
