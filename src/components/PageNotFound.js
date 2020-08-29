import React from 'react';
import errorImage from '../img/404Error.png'

function PageNotFound() {
    return (
        <div className="not-found">
            <img src={errorImage} alt="not-found" />
        </div>
    )
}

export default PageNotFound
