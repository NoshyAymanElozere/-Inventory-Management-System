import React from "react";
import Login from "../components/login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginPage;
