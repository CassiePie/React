export default function SplitPane({ left, right }) {

    const splitPaneStyles =  {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
    }
    return <div style={splitPaneStyles}>
        <div>{left}</div>
        <div>{right}</div>
    </div>
}