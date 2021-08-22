
import React from "react";
import ShoppingItem from "./ShoppingItem";
import ShoppingCategoryFilter from "./ShoppingCategoryFilter";
import ShoppingNewItemForm from "./ShoppingNewItemForm";


function ShoppingList ({onDeleteItem, items, categories, selectedCategory, onCategorySelected, onNewShoppingItemFormSubmit}) {
    const ShoppingElements = items.map((item) => {
        return (
            <ShoppingItem 
                title={item.title}
                key={item.title}
                category={item.category}
                onDeleteItem={onDeleteItem}
                className={item}
            />
            
           
        )
    })

    return (
        <div>
            <ShoppingNewItemForm categories={categories} onNewShoppingItemFormSubmit={onNewShoppingItemFormSubmit} />
            <br></br>
            <ShoppingCategoryFilter categories={categories} selectedCategory={selectedCategory} onCategorySelected={onCategorySelected} />
            <div>{ShoppingElements}</div>
        </div>
        )
}

export default ShoppingList;


