import React, {useState} from "react";

function TodoNewItemForm({ categories, onNewTodoFormSubmit}) {
    const [newItemCategory, setNewItemCategory] = useState("")
    const [newItemTitle, setNewItemTitle] = useState("")

    const categoriesWithoutAll = categories.filter((category) => (category !== "All"))
    const options = categoriesWithoutAll.map((category) => {
        return (
            <option key={category} value={category}>{category}</option>
          )
    })

    function handleSelectedCategory(event) {
        setNewItemCategory(event.target.value)
    }

    function handleTitleChange(event) {
        setNewItemTitle(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const newTodo = {
            title: newItemTitle,
            category: newItemCategory
        }
        onNewTodoFormSubmit(newTodo)

    }
   
    return (
        <div>
        <form onSubmit={handleSubmit} className="new-todo-form">
            <label>
                Title: <input type="text" onChange={handleTitleChange} value={newItemTitle}></input>
            </label>
                <label> Category: <select onChange={handleSelectedCategory}>
                <option selected disabled hidden>Choose a Category</option>
                        {options}
                    </select>
                </label>
            <input type="submit" value="Add New Todo"></input>
        </form>
        </div>
    )
    
}

export default TodoNewItemForm;