/* Leadspace.jsx */
import React from 'react';

const Leadspace = (props) => {
    return (
        <div className="leadspace">
            <div className="container container--fixed">
                <div className="row">
                    <div className="c-m-f1">
                        <h1 className="p-top-1 leadspace-title">{ props.title }</h1>
                        <p className="p-top-1 leadspace-subtitle">{ props.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leadspace;