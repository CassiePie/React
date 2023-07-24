export default function FancyBorder({ color, children }) {

    const fancyBorderStyles = {
        borderWidth: '1px',
        borderStyle: 'solid', 
        borderColor: color,
    }

    return <div style={fancyBorderStyles}>
        {children}
    </div>
}