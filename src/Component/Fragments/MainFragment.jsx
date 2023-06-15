import React, { useEffect, useState } from "react";
import Input from "../Element/Input";
import List from "../Element/List";
import Title from "../Element/Title";

const MainFragment = ({ setEditView, setDataToEdit, toDoList, getApi }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Title text="To Do List" />
      <Input
        value={inputValue}
        setValue={setInputValue}
        getApi={getApi}
        isEdit={false}
      >
        Add List
      </Input>
      <List
        doList={toDoList}
        getApi={getApi}
        setEditView={setEditView}
        setDataToEdit={setDataToEdit}
      />
    </div>
  );
};

export default MainFragment;
