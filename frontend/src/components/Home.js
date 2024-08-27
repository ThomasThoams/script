import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const handleLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <Link to="/contacts">Manage Contacts</Link>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
