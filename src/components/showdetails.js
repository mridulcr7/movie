
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
                const data = await response.json();
                setShow(data);
            } catch (error) {
                console.error('Error fetching show details:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            {show ? (
                <>
                    <h2>{show.name}</h2>
                    <img src={show.image && show.image.medium} alt={show.name} />
                    <p>{show.summary}</p>
                    <Link to="/booking">
                        <button>Book Ticket</button>
                    </Link>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ShowDetails;
