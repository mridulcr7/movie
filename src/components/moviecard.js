// MovieCard.js
import React from 'react';

function MovieCard({ data }) {
    return (
        <div>
            <img src={data.image && data.image.medium} alt={data.name} />
            <h1>{data.name}</h1>
            <h2>{data.language}</h2>
        </div>
    );
}

export default MovieCard;
