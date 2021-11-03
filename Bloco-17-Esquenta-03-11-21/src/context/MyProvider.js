import React, { useState, useEffect } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false)
  const contextValue = { user, setUser, loading, setLoading };
  const axios = require('axios');

  async function userAxios(){
    
    const { data } = await axios.get('http://localhost:8080/')
    console.log('estou na function userAxio', data);    
    await setUser(data);
    

  }
  

  useEffect(() => {
    userAxios();
  }, []);

  return (
    <MyContext.Provider value={contextValue}>
      { children }
    </MyContext.Provider>
  )
}

export default Provider;
