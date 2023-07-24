import React from 'react';
import { useSelector } from 'react-redux';

export default function LengthDisplay() {

        const length = useSelector(state => state.length);
    
        return (
            <div>
                { length ? `Height set at ${length} cm!` : `No height entered yet` }
            </div>
        );
}