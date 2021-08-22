import React from "react";


function ShoppingCategoryFilter({ categories, selectedCategory, onCategorySelected }) {
    
    const categoryButtons = categories.map((category) => {
        const className = (category === selectedCategory ? "selected" : null)
        return (<button
            key={category}
            onClick={() => (onCategorySelected(category))}
            className={className}
            >
          {category}
          </button>)
    })
    return <div> {categoryButtons} </div>   
}

export default ShoppingCategoryFilter;
