import React from 'react';
import IngredientItem from './IngredientItem';

const IngredientsList = ({ ingredients }) => {
    // console.log(ingredients);
    const ingredientList = ingredients.map((ingredient) => {
        console.log(ingredient.text);

        return <p>{ingredient.text}</p>;
    });

    return (
        // <div>{renderedList}</div>
        <div>{ingredientList}</div>
    );
};

export default IngredientsList;