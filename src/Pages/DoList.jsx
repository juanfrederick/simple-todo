import React, { useState, useEffect } from "react";
import MainFragment from "../Component/Fragments/MainFragment";
import "./pages.css";
import EditFragment from "../Component/Fragments/EditFragment";
import { useNavigate } from "react-router-dom";

const DoList = () => {
  const [editView, setEditView] = useState(false);
  const [dataToEdit, setDataToEdit] = useState({});
  const [toDoList, setToDoList] = useState([]);
  const navigate = useNavigate();

  const getApi = () => {
    fetch("http://localhost:3000/list")
      .then((res) => res.json())
      .then((resData) => setToDoList(resData));
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    }
    getApi();
  }, []);

  return (
    <div className="container">
      <button
        className="universal-btn pos-end"
        onClick={() => {
          navigate("/login");
          localStorage.clear();
        }}
      >
        Logout
      </button>
      <MainFragment
        setEditView={setEditView}
        setDataToEdit={setDataToEdit}
        toDoList={toDoList}
        getApi={getApi}
      />
      {editView ? (
        <EditFragment
          setEditView={setEditView}
          dataToEdit={dataToEdit}
          getApi={getApi}
        />
      ) : null}
    </div>
  );
};

export default DoList;
