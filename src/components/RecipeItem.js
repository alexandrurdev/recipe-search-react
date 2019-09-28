import React from 'react';
import IngredientsList from './IngredientsList';

const RecipeItem = ({ recipe }) => {
    return (
        <div className="five wide column">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="ui image" />
            <h4>{recipe.recipe.label}</h4>
            <IngredientsList ingredients={recipe.recipe.ingredients} />
        </div>
    );
};

export default RecipeItem;