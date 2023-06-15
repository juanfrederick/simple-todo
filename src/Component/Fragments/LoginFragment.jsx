import React, { useState } from "react";
import LoginInput from "../Element/Login/LoginInput";
import { Link, useNavigate } from "react-router-dom";

const LoginFragment = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [invalid, setInvalid] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (!data.ok) {
        const resp = await data.json();
        throw resp;
      } else {
        const resp = await data.json();
        localStorage.setItem("accessToken", resp.accessToken);
        navigate("/");
      }
    } catch (error) {
      setInvalid(error);
      setTimeout(() => {
        setInvalid("");
      }, 1000);
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit} className="login-fragment">
      <h1>Login</h1>
      {invalid && <p className="invalid">{invalid}</p>}
      <LoginInput
        text="Email"
        placeholder="Insert Email"
        id="email"
        type="email"
        value={loginData.email}
        onchange={(e) => {
          setLoginData({ ...loginData, email: e.target.value });
        }}
      />
      <LoginInput
        text="Password"
        placeholder="Insert password"
        id="password"
        type="password"
        value={loginData.password}
        onchange={(e) => {
          setLoginData({ ...loginData, password: e.target.value });
        }}
      />
      <p>
        Dont have an account?{" "}
        <Link className="link" to="/signup">
          Signup
        </Link>
      </p>
      <button type="submit" className="universal-btn">
        Login
      </button>
    </form>
  );
};

export default LoginFragment;
