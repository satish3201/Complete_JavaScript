import React, { useEffect, useState } from 'react';

const UserAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("Fetch error:", error);
      }
    };

    fetchData(); // you must call it
  }, []);

  return (
    <div>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
};

export default UserAPI;
