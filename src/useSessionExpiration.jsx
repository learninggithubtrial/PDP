import { useEffect } from 'react';

const useSessionExpiration = (sessionToken) => {
  const checkSessionExpiration = () => {
    // Perform session expiration check logic here
    // ...
    const isExpired = false;
    if (isExpired) {
      // Handle session expiration
      console.log('Session expired. Redirecting to login page...');
      sessionStorage.removeItem("token");
    } else {
      console.log('Valid Token');
      sessionStorage.setItem("token" , sessionToken);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(checkSessionExpiration, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default useSessionExpiration;
