import React from "react";
import LoginInput from "../Element/Login/LoginInput";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupFragment = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [invalid, setInvalid] = useState("");
  const navigate = useNavigate();

  const submitHandle = async (e) => {
    try {
      e.preventDefault();

      if (userData.password !== userData.confirmPassword) {
        setInvalid("Password didn't same");
        setTimeout(() => {
          setInvalid("");
        }, 1000);
        return;
      }

      delete userData.confirmPassword;

      const fetchData = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!fetchData.ok) {
        const resp = await fetchData.json();
        throw resp;
      } else {
        const resp = await fetchData.json();
        console.log(resp);
        setUserData({
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      }
    } catch (error) {
      setInvalid(error);

      setTimeout(() => {
        setInvalid("");
      }, 1000);
    }
  };

  return (
    <form action="submit" className="login-fragment" onSubmit={submitHandle}>
      <h1>Sign Up</h1>
      {invalid && <p className="invalid">{invalid}</p>}
      <LoginInput
        text="Email"
        placeholder="Insert Email"
        id="email"
        type="email"
        value={userData.email || ""}
        onchange={(e) => {
          setUserData({ ...userData, email: e.target.value });
        }}
      />
      <LoginInput
        text="Password"
        placeholder="Insert password"
        id="password"
        type="password"
        value={userData.password || ""}
        onchange={(e) => {
          setUserData({ ...userData, password: e.target.value });
        }}
      />
      <LoginInput
        text="Confirm Password"
        placeholder="Insert password"
        id="conPassword"
        type="password"
        value={userData.confirmPassword || ""}
        onchange={(e) => {
          setUserData({ ...userData, confirmPassword: e.target.value });
        }}
      />
      <p>
        Already have an account?{" "}
        <Link className="link" to="/">
          Login
        </Link>
      </p>
      <button type="submit" className="universal-btn">
        SignUp
      </button>
    </form>
  );
};

export default SignupFragment;
