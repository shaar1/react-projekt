import React from "react"

function Todo({ content, onDelete, id }) {
    return (
        <div className="list-item">
            {content}
            <button className="delete is-pulled-right complete" onClick={() => { onDelete(id) }}> x </button>
        </div>
    );
}

export default Todo;