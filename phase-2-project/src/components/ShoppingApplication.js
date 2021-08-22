import React, {useState} from "react"
import ShoppingList from "./ShoppingList"
import { shoppingItems, shoppingCategories} from "../data"
import "./ShoppingApplication.css"

function ShoppingApplication() {
    const [items, setItems] = useState(shoppingItems)
    const [selectedCategory, setSelectedCategory] = useState("All")

    function handleDeleteItem(text) {
        setItems(items.filter((element) => (element.title !== text)))
      }
    
    function handleCategorySelected(category) {
        setSelectedCategory(category)
    }

    function addNewItem(newItem) {
        setItems([...items, newItem])
    }

    const selectedItems = items.filter((item) => (item.category === selectedCategory || selectedCategory === "All"))

    return (
        <div>
            <h2>Shopping List</h2>
            <ShoppingList onDeleteItem={handleDeleteItem} items={selectedItems} categories={shoppingCategories} selectedCategory={selectedCategory} onCategorySelected={handleCategorySelected} onNewShoppingItemFormSubmit={addNewItem}/>
        </div>)
}

export default ShoppingApplication;