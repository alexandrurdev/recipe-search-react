import React from 'react';

const IngredientsList = ({ ingredients }) => {
    const ingredientList = ingredients.map((ingredient) => {

        return (
            <ul>
                <li>
                    {ingredient.text}
                </li>
            </ul>
        );

    });

    return (
        <div>{ingredientList}</div>
    );
};

export default IngredientsList;