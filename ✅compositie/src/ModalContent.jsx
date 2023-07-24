import ModalContentHeader from './ModalContentHeader';

export default function ModalContent({ title, children, onClick }) {

    const modalContentStyles = {
        position: 'relative',
        backgroundColor: 'white',
        padding: '1rem',
        maxWidth: '400px',
    }
     return (
        <div style={modalContentStyles}>
            <ModalContentHeader title={title} onClick={onClick} />
                { children }
        </div>

     )
}