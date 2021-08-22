import React from "react";

function TodoItem({ category, title, onDeleteTodo }) {

    function handleClick() {onDeleteTodo(title)}
    return (
        <div className="todo">
            <div className={"todo-cat"}>{category}</div>
            <div className={"todo-title"}>{title}</div>
            <button className="delete-button" onClick={handleClick}>X</button>
        </div>
    )
}

export default TodoItem;