// components/JumboHeading.js
import React from 'react';

const JumboHeading = ({ heading, text }) => {
    console.log('JumboHeading props:', { heading, text });

    return (
        <>
            <div className="custom-jumbotron text-center">
                <div className="container">
                    <h1>{heading}</h1>
                    <p className="lead">{text}</p>
                </div>
            </div>
            <br />
        </>
    );
};

export default JumboHeading;
