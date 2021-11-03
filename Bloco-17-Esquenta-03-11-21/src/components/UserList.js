import React, { useContext, useEffect } from 'react';
import UserContext from '../context/MyContext'

function UserList() {
  const { user, setUser, loading, setLoading } = useContext(UserContext)

  useEffect(() => {
    (user.lenght > 0) ? setLoading(false) : setLoading(true); 
  }, [setLoading, user])

  return (
    <ul>
      {console.log('userlistMAP', user)}
      {user.map((user) => <li>{user.first_name}</li>)}
    </ul>
  )
}

export default UserList;
