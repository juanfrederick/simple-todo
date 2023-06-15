import React from "react";
import { memo } from "react";

const List = ({ doList, getApi, setEditView, setDataToEdit }) => {
  const deleteAPI = (id) => {
    fetch(`http://localhost:3000/list/${id}`, {
      method: "DELETE",
    })
      .catch((err) => console.log(err))
      .finally(() => {
        getApi();
      });
  };

  const patchApi = (id, done) => {
    const updateDone = !done;
    fetch(`http://localhost:3000/list/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({
        done: updateDone,
      }),
    })
      .catch((err) => console.log(err))
      .finally(() => {
        getApi();
      });
  };

  return (
    <div className="list-container">
      {doList.length <= 0 ? (
        <h1 className="no-do-list">No Do List ...</h1>
      ) : (
        doList.map((val) => {
          return (
            <div
              className="list-item"
              key={val.id}
              onClick={() => {
                patchApi(val.id, val.done);
              }}
            >
              <p
                className="list-item-p"
                style={
                  val.done
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {val.title}
              </p>
              <button
                className="list-item-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteAPI(val.id);
                }}
              >
                Delete
              </button>
              <button
                className="list-item-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setDataToEdit(val);
                  setEditView(true);
                }}
              >
                Edit
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default memo(List);
