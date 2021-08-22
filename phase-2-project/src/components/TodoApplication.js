import React, {useState} from "react"
import TodoList from "./TodoList"
import {tasks, todoCategories} from "../data"
import "./TodoApplication.css";


function TodoApplication() {
  const [todos, setTodos] = useState(tasks)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleDeleteTodo(text) {
    setTodos(todos.filter((element) => (element.title !== text)))
  }

  function handleCategorySelected(category) {
    setSelectedCategory(category)
  }

  function addNewTodo(newTodo) {
    setTodos([...todos, newTodo])
  }
  
  const selectedTodos = todos.filter((todo) => (todo.category === selectedCategory || selectedCategory === "All"))


  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoList onDeleteTodo={handleDeleteTodo} todos={selectedTodos} categories={todoCategories} selectedCategory={selectedCategory} onCategorySelected={handleCategorySelected} onNewTodoFormSubmit={addNewTodo}></TodoList>
      </div>

  );
}

export default TodoApplication;

