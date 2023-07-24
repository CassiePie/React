import React from 'react';

export default function Weight({ weight, height }) {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);

    return (
        <div>
            { weight } (bmi: { bmi })
        </div>
    );
}
