import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('/api/contacts')
            .then(response => {
                setContacts(response.data);
            })
            .catch(error => console.error('There was an error fetching the contacts!', error));
    }, []);

    const deleteContact = (id) => {
        axios.delete(`/api/contacts/${id}`)
            .then(() => {
                setContacts(contacts.filter(contact => contact._id !== id));
            })
            .catch(error => console.error('There was an error deleting the contact!', error));
    };

    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id}>
                        {contact.firstname} {contact.lastname} ({contact.email})
                        <button onClick={() => deleteContact(contact._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
