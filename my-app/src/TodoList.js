import React from "react"
import Todo from "./Todo"

function TodoList({ tasks, onDelete }) {
    const todos = tasks.map((todo, index) => {
        return <Todo content={todo} key={index} id={index} onDelete={onDelete} />
    })
    return (
        <div className="list-wrapper">
            {todos}
        </div>
    );
}

export default TodoList;