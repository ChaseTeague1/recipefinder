import React from "react";
import { Link } from "react-router-dom";
import BrowseRecipe from "../pages/BrowseRecipe";


function SearchBar(){

    return (
        <div>
            <Link to={'/browse'}>
            <h2 className="search-name">Search Recipes</h2>
            </Link>
        </div>
    )
}

export default SearchBar;