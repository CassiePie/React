import { useState, useEffect } from 'react';
import ModalDialog from './ModalDialog';

export default function Modal({ title, children }) {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open === true) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowX = 'auto'
        }
    }, [open])

    return (
        <>
        <button onClick={() => setOpen(true)}>
            { open ? 'Close' : 'Open'} 
        </button>

            { open === true && 
                <ModalDialog 
                    title={title}
                    onClick={() => setOpen(false)}
                >
                    { children }
                </ModalDialog> }
        </>
    )
}