import React, { useState } from 'react';
import axios from 'axios';

function CreateEditContact({ contact }) {
    const [firstname, setFirstname] = useState(contact ? contact.firstname : '');
    const [lastname, setLastname] = useState(contact ? contact.lastname : '');
    const [email, setEmail] = useState(contact ? contact.email : '');
    const [phone, setPhone] = useState(contact ? contact.phone : '');

    const handleSubmit = (event) => {
        event.preventDefault();
        const contactData = { firstname, lastname, email, phone };
        if (contact) {
            axios.put(`/api/contacts/${contact._id}`, contactData)
                .then(response => {
                    console.log('Contact updated:', response.data);
                });
        } else {
            axios.post('/api/contacts', contactData)
                .then(response => {
                    console.log('Contact created:', response.data);
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button type="submit">{contact ? 'Update' : 'Create'} Contact</button>
        </form>
    );
}

export default CreateEditContact;
