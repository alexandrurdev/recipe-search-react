import React from 'react';
import recipeapi from '../apis/recipeapi';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

class App extends React.Component {
    state = { recipes: [] };

    onFormSubmit = async term => {
        const res = await recipeapi.get('/search', {
            header: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            params: {
                q: term,
                app_id: '603c8bc2',
                app_key: '21633e8eb26efad4fe25ac9eb99aeed7',
                from: 0,
                to: 10
            }
        }).catch(err => {
            console.log(err)
        });


        this.setState({ recipes: res.data.hits });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onFormSubmit} />
                <RecipeList recipes={this.state.recipes} />
            </div>
        );
    }
}

export default App;