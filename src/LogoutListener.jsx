// LogoutListener.jsx in MFE2

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const LogoutListener = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const myName = useSelector((state) => state.name);
  console.log(myName);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLogout = () => {
      console.log('Logged out from MFE2');
      // Perform logout actions specific to MFE2
    };

    if (!isLoggedIn) {
      handleLogout();
    }

    // Clean-up function
    return () => {
      // Perform clean-up actions if needed
    };
  }, [isLoggedIn]);

  return null;
};

export default LogoutListener;
