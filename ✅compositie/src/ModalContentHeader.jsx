export default function ModalContentHeader({ onClick, title }) {
    const headerStyles = {
        backgroundColor: 'red',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '-1rem',
        marginRight: '-1rem',
        marginTop: '-1rem',
        padding: '1rem',
    }

    return (
        <div style={ headerStyles }>
            <span>{ title }</span>
            <button onClick={ onClick }>&times;</button>
        </div>
    )
}