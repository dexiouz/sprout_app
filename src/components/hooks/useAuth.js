import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const useAuth = () => {
  const { signIn, signOut } = useContext(AuthContext);

  const handleLogin = async values => await signIn(values);

  const handleLogout = async () => await signOut();

  return {
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
