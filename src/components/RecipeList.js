import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
    const renderedList = recipes.map((recipe) => {
        // console.log(recipe.recipe.label);
        // return <div>{recipe.recipe.label}</div>
        return <RecipeItem recipe={recipe} />;
    });

    return (
        <div>{renderedList}</div>
        // <div>Recipe list</div>
    );
};

export default RecipeList;