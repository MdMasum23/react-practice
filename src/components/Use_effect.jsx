import React, { useEffect, useState } from 'react';

const Use_effect = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []); 

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Use_effect;