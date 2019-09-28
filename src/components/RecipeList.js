import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes }) => {
    const renderedList = recipes.map((recipe) => {
        return <RecipeItem recipe={recipe} />;
    });

    return (
        <div className="ui grid">
            <div className="ui row">
                {renderedList}
            </div>
        </div>
    );
};

export default RecipeList;