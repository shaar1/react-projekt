import React from "react"

function Header({ numTodos, completedCount }) {
    return (
        <div className="card-header">
            <h1 className="card-header-title header">
                You have {numTodos} Todos and you completed {completedCount}
            </h1>
        </div>
    )
}

export default Header;