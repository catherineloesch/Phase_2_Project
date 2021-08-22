
import React from "react";
import TodoItem from "./TodoItem";
import TodoCategoryFilter from "./TodoCategoryFilter";
import TodoNewItemForm from "./TodoNewItemForm";



function TodoList ({onDeleteTodo, todos, categories, selectedCategory, onCategorySelected, onNewTodoFormSubmit}) {
    const todoElements = todos.map((todo) => {
        return (
            <TodoItem
                title={todo.title}
                key={todo.title}
                category={todo.category}
                onDeleteTodo={onDeleteTodo}
                className={todo}
            />
        )
    })

    return (
        <div>
            <TodoNewItemForm categories={categories} onNewTodoFormSubmit={onNewTodoFormSubmit} />
            <br></br>
            <TodoCategoryFilter categories={categories} selectedCategory={selectedCategory} onCategorySelected={onCategorySelected} />
            <div>{todoElements}</div>
        </div>
        )
}

export default TodoList


