
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
                const data = await response.json();
                setShows(data);
            } catch (error) {
                console.error('Error fetching shows:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Show List</h2>
            <ul>
                {shows.map((show) => (
                    <li key={show.show.id}>
                        <Link to={`/show/${show.show.id}`}>
                            <img src={show.show.image && show.show.image.medium} alt={show.show.name} />
                            <p>{show.show.name}</p>
                            <p>{show.show.network && show.show.network.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowList;
