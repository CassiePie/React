import React from 'react';
import Card from  './Card';

export default function ImageCard({ imageUrl, title, children }) {
    const imageStyle = {
        maxWidth: '100%',
        height: 'auto'
    };

    const imageUrl = 'https://picsum.photos/seed/picsum/200/300';

    return (
        <Card>
            <img src={imageUrl} alt="example image"/>
            <h2> Title </h2>
            { children }
        </Card>
    )

}