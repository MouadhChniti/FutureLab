import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const checkMe = async () => {
      try {
        const response =  axios.post("http://localhost:8000/api/accounts/provider/", {}, {
          headers: {
            authorization: localStorage.getItem('token')
          }
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
  
    useEffect(() => {
      checkMe();
    }, []);
  
    return (
      <>
        {loading ? <h1>Loading ...</h1> : (
          user ? children : <Navigate to="/login" />
        )}
      </>
    );
  };
  export default Provider;
