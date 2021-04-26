import AddUser from './Components/Users/AddUser'
import UserList from './Components/Users/UserList'
import React, { useState } from 'react'

function App() {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} ></AddUser>
      <UserList users={usersList} />
    </div>
  )
}

export default App;
