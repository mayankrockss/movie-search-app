import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import axios from 'axios';

function MovieDetails() {
    const excludedKeys = ['Ratings', 'Poster', 'Response', 'imdbID'];
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
                        !excludedKeys.includes(key) && <p key={key} className='detail'>
                            {key !== 'Title' && <span className='detail-key'>{key}</span>}
                            <span className='detail-text'>{details[key]}</span>
                        </p>
                    )
                    )}
                </div>
            </div> : <Spinner />
    )
}

export default MovieDetails;
