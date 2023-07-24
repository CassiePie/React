import React from 'react';

export default function Card({ children }) {
    const cardStyle = {
        display: 'inline-block',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
        border: '1px solid #ccc',
        padding: '1rem',
        margin: '1rem'
    };

    return <div style={ cardStyle }>
        { children }
    </div>
}