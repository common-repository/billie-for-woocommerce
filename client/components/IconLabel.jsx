export default function Label({text, icon}) {
    return (
        <span
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: '16px',
                width: '100%',
                gap: '16px',
            }}
        >
            <strong>{text}</strong>
            {icon ? (<img src={icon} alt={text}/>) : null}
        </span>
    );
}
