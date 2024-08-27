import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

      </header>
    </div>
  );
}

export default App;
