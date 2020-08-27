import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
    const [details, setDetails] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.omdbapi.com/?apikey=5ffea7a1&i=${id}`);
            const { data: { Error, Response } = {} } = result || {};

            if (Response === "False")
                alert(Error + 'Try Again!!');
            else
                setDetails(result?.data);
        }
        (fetchItems());
    }, [id]);

    return (
        Object.keys(details).length ? 
        <div className='details-container'>
            <img src={details.Poster} alt={details.Title} />
            <div className='details'>
                {Object.keys(details).map(key => (
                    !['Ratings', 'Poster'].includes(key) && <p key={key} className='detail'>
                        <span className='detail-key'>{key}</span> : &nbsp;
                    <span className='detail-text'>{details[key]}</span>
                    </p>
                )
                )}
            </div>
        </div> : <h1>loading...</h1>
    )
}

export default MovieDetails;
