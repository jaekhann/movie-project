import React from "react";
import "./MovieList.css";
import MovieListItem from "../movie-list-item/MovieListItem.jsx";

const MovieList = ({data, onDelete, onToggleProp}) => {
    return (
        <ul className="movie-list">
            {data.map((item) => (
                <MovieListItem
                    key={item.id}
                    title={item.title}
                    viewers={item.viewers}
                    favourite={item.favourite}
                    like={item.like}
                    onDelete={() => onDelete(item.id)}
                    onToggleProp={(event) => onToggleProp(item.id, event.currentTarget.getAttribute('data-toggle'))}
                />
            ))}
        </ul>
    );
};

export default MovieList;
