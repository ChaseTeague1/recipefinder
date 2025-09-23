import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";

function Home(){

    return (
        <div className="home-container">
            <div className="header">
                <h1>Find the best recipes from users</h1>
                <p>Discover and share your favorite recipes with our community.</p>
                <SearchBar />
            </div>
            <div className="home-body">
                <h1>Featured recipes</h1>
            </div>
        </div>
    )
}

export default Home