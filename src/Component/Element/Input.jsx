import React from "react";
import "./element.css";

const Input = ({
  value,
  setValue,
  getApi,
  isEdit,
  editId,
  setEditView,
  children,
}) => {
  const editData = (isEdit) => {
    if (isEdit) {
      const editList = { title: value };
      fetch(`http://localhost:3000/list/${editId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editList),
      })
        .catch((err) => console.log(err))
        .finally(() => {
          setValue("");
          getApi();
          setEditView(false);
        });
    } else {
      const newList = { title: value, done: false };
      if (newList.title === "") {
        return;
      } else {
        fetch("http://localhost:3000/list", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newList),
        })
          .catch((err) => console.log(err))
          .finally(() => {
            setValue("");
            getApi();
          });
      }
    }
  };

  return (
    <div className="list-input-button-container">
      <input
        type="text"
        className="list-input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        className="add-list-button"
        onClick={() => {
          editData(isEdit);
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Input;
