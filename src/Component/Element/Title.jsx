import React from "react";
import "./element.css";
import { memo } from "react";

const Title = ({ text }) => {
  return <h1 className="main-title">{text}</h1>;
};

export default memo(Title);
