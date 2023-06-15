import React from "react";
import Input from "../Element/Input";

import { useState } from "react";

import "./fragment.css";
import Title from "../Element/Title";

const EditFragment = ({ setEditView, dataToEdit, getApi }) => {
  const [editInput, setEditInput] = useState(dataToEdit.title);

  return (
    <div className="edit-container">
      <div className="edit-back">
        <Title text="Edit To Do List" className="edit-title" />
        <Input
          value={editInput}
          setValue={setEditInput}
          isEdit={true}
          editId={dataToEdit.id}
          getApi={getApi}
          setEditView={setEditView}
        >
          Edit List
        </Input>
        <div
          className="exit-edit-button"
          onClick={() => {
            setEditView(false);
          }}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default EditFragment;
