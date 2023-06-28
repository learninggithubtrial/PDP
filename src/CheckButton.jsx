import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './redux/actions';

const CheckButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Other logout actions specific to MFE1
  };

  return <button onClick={handleLogout}>Check</button>;
};

export default CheckButton;