import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import useSessionExpiration from "./useSessionExpiration";
import TokenRefresh from "./TokenRefresh";

const Dashboard = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const token = location.state?.encodedToken;
  useSessionExpiration(token);
  useEffect(() => {
    TokenRefresh(); // Call the token refresh logic
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
