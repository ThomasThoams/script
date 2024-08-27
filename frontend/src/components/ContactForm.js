import React, { useState, useEffect } from 'react';

function ContactForm({ addContact, updateContact, editingContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingContact) {
      updateContact(editingContact._id, { name, email });
    } else {
      addContact({ name, email });
    }
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">{editingContact ? 'Update' : 'Add'} Contact</button>
    </form>
  );
}

export default ContactForm;
