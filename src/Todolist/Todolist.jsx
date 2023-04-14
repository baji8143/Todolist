import React from "react";
import "./style.css"

const Todolist = ({todos, DelTodo}) => {
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <h5>
              {todo} &nbsp;
              <button onClick={DelTodo} className="delbtn">Delete</button>
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
