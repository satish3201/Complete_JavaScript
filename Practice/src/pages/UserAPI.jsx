import React, { useEffect, useState } from 'react'

const UserAPI = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            console.log(response);
            const result = await response.json();
            console.log(result);
            setUsers(result);
            console.log(users); 
        }
        fetchData();
    }, [])

    return (
  <div className="p-6">

    <h1 className="text-3xl font-bold text-blue-600 mb-6">
      User List
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {users.map((user) => (
        <div 
          key={user.id} 
          className="p-5 bg-white border rounded-xl shadow hover:shadow-xl transition duration-300"
        >
          <p className="text-sm text-gray-500">
            User ID: <span className="font-bold">{user.id}</span>
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-1">
            {user.name}
          </h2>

          <p className="text-gray-600 mt-1">
            Username: <span className="font-medium">{user.username}</span>
          </p>

          <p className="text-gray-600 mt-1">
            Email: <span className="font-medium">{user.email}</span>
          </p>

          <p className="text-gray-600 mt-1">
            City: <span className="font-medium">{user.address.city}</span>
          </p>

          <p className="text-gray-600 mt-1">
            Phone: <span className="font-medium">{user.phone}</span>
          </p>

          <p className="text-blue-600 font-medium mt-2 underline cursor-pointer">
            Website: {user.website}
          </p>
        </div>
      ))}
    </div>

  </div>
);

}

export default UserAPI


